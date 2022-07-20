import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  FormErrorMessage,
  FormLabel,
  FormControl,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  useToast,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

function GameRulesForm(props) {
  const [currentRound, setCurrentRound] = useState(null);
  const [formDefaultValues, setFormDefaultValues] = useState((props.mode === 'create') ?
    {
      gameName: '',
      colors: ['#FFFFFF', '#777777', '#000000'],
      coolDown: 0,
      tiles: [
        [0, null], [0, null], [0, null],
        [0, null], [0, null], [0, null],
        [0, null], [0, null], [0, null],
      ],
      startRound: null,
      endRound: null,
      numPlayers: 0,
    }
    : {
      gameName: props.tools.gameState.gameName,
      startRound: props.tools.gameState.startRound,
      endRound: props.tools.gameState.endRound,
      coolDown: props.tools.gameState.coolDown,
      colors: props.tools.gameState.colors
    }
  );

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: formDefaultValues,
  });
  const navigate = useNavigate();
  const toast = useToast();
  const [approxStartTime, setApproxStartTime] = useState(null);
  const [approxEndTime, setApproxEndTime] = useState(null);
  const [approxCoolDownTime, setApproxCoolDownTime] = useState(null);
  const fetchRoundTimer = useRef(null);
  const startRoundWatch = watch('startRound', formDefaultValues.startRound);
  const endRoundWatch = watch('endRound', formDefaultValues.endRound);
  const coolDownWatch = watch('coolDown', formDefaultValues.coolDown);
  const keepFetching = useRef(true);
  const isFetching = useRef(false); // Prevents more than one fetch at the same time

  /*
   * Continuously check and update the current round
   */
  useEffect(
    () => {
      keepFetching.current = true;

      const fetchCurrentRound = async () => {
        if (!keepFetching.current || isFetching.current) { // Don't continue if we shouldn't fetch again
          return
        }

        isFetching.current = true;

        // Get the current round
        setCurrentRound(props.tools.reachLib.bigNumberToNumber(await props.tools.reachLib.getNetworkTime()));

        isFetching.current = false;
        fetchRoundTimer.current = setTimeout(fetchCurrentRound, props.tools.NETWORK_FETCH_INTERVAL); // Fetch again later
      }

      fetchCurrentRound();

      return () => { // Clean up
        // Remove timer
        clearTimeout(fetchRoundTimer.current);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [keepFetching]
  );

  useEffect(
    () => {
      setApproxCoolDownTime(props.tools.calculateRoundTimeSpan(coolDownWatch));

      if (props.mode === 'edit') {
        setApproxStartTime(props.tools.calculateFutureRoundTime(startRoundWatch, currentRound));
        setApproxEndTime(props.tools.calculateFutureRoundTime(endRoundWatch, currentRound));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formDefaultValues, currentRound]
  );

  function onSubmit(values) {
    return new Promise((resolve, reject) => {
      if (props.mode === 'create') {
        const newContractHandle = props.tools.account.contract(props.tools.reachBackend);
        const approveTxnToast = toast({
          title: 'Approve transactions',
          description: <>
            <Text>You need to review and approve multiple transactions. Go to your wallet to review and approve each transaction.</Text>
            <Text mb={4}>Please be patient. It may take a few seconds for each transaction review prompt to appear.</Text>
          </>,
          status: 'warning',
          isClosable: true,
          duration: null,
        });

        // Deploy contract for game
        props.tools.reachBackend.Deployer(newContractHandle, {
          gameName: encodeURIComponent(values.gameName),  // Encoding into a URI component allows non-ASCII UTF8 characters
          colors: values.colors,
          startRound: values.startRound,
          endRound: values.endRound,
          coolDown: values.coolDown,
          deployed: async () => {
            const appId = props.tools.reachLib.bigNumberToNumber(await newContractHandle.getInfo());

            toast.close(approveTxnToast);

            // Notifiy user
            toast({
              title: 'Game created.',
              description: <>
                <Text>You created a game with App ID: <strong>{appId}</strong></Text>
                <Text>Save this App ID for later. You'll need it to connect to the game later.</Text>
              </>,
              status: 'success',
              isClosable: true,
              position: 'top',
              duration: null,
            });
            resolve(); // Notify the form that the submission finished successfully and the submit button can be enabled again
            navigate(`/game/${appId}`);
          },
        })
        .catch((error) => { // Deployment of the contract failed
          console.error(error);
          toast.close(approveTxnToast);
          toast({
            title: 'Game creation failed.',
            description: <>
              <Text mb={2}>Unable to create the game. This error may be caused by one of the following:</Text>
              <UnorderedList>
                <ListItem>The connection to the Algorand network is not working</ListItem>
                <ListItem>You did not approve all of the transactions</ListItem>
                <ListItem>You do not have enough Algos to create a game</ListItem>
              </UnorderedList>
            </>,
            status: 'error',
            isClosable: true,
            position: 'top',
            duration: 9000,
          });
          reject();
        });

      } else { // props.mode === 'edit'
        const dirtyFields = getDirtyFields(values, formDefaultValues);
        const contractHandle = props.tools.account.contract(props.tools.reachBackend, props.appId);

        if (dirtyFields.length > 0) { // If any of the fields where modified
          const approveTxnToast = toast({
            title: 'Approve transaction',
            description: 'Go to your wallet to review and approve the transaction.',
            status: 'warning',
            isClosable: true,
            duration: null,
          });

          contractHandle.apis.GameMaster.updateGameRules(
            values.gameName,
            values.startRound,
            values.endRound,
            values.coolDown,
            values.colors
          )
          .then(async () => {
            const gameState = await props.tools.processGameState(contractHandle.views.GameState, props.tools.reachLib);
            setFormDefaultValues(values); // Update the default games state, so the form can be modified and resubmitted successfully
            props.tools.setGameState(gameState);
            toast.close(approveTxnToast);
            // Notifiy user
            toast({
              title: 'Game rules updated.',
              description: <>
                <Text>The new game rules are applied immediately.</Text>
              </>,
              status: 'success',
              isClosable: true,
              position: 'top',
              duration: 9000,
            });
            resolve();
          })
          .catch((error) => { // At least one of the requests failed.
            console.error(error);
            toast.close(approveTxnToast);
            toast({
              title: 'Game rules update failed.',
              description: <>
                <Text>All or part of the changes were unable to be saved. Referesh the page to see the most current rules.</Text>
                <Text mb={2}>This error may be caused by one of the following:</Text>
                <UnorderedList>
                  <ListItem>The connection to the Algorand network is not working</ListItem>
                  <ListItem>You do not have enough Algos for the Algorand transaction fee to edit game</ListItem>
                </UnorderedList>
              </>,
              status: 'error',
              isClosable: true,
              position: 'top',
              duration: 9000,
            });
            reject();
          });
        } else { // None of the rules were changed
          toast({
            title: 'Nothing updated.',
            description: 'None of the rules were changed, so nothing was updated.',
            status: 'warning',
            isClosable: true,
            position: 'top',
            duration: 9000,
          });
          resolve();
        }
      }
    });
  }

  // NOTE: The react-hooks dirty fields doesn't work with Chakra number fields. That why we need this function to manually check if the field have been modified.
  function getDirtyFields(formFields, initialFields) {
    return Object.keys(formFields).filter((fieldName) => {
      if (formFields[fieldName] instanceof Array) {
        return !(formFields[fieldName].every((n, i) => n === initialFields[fieldName][i])); // If any of the items in the array are different
      }
      return formFields[fieldName] !== initialFields[fieldName];
    });
  }

  return (
    <Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text>
          Current Round: { currentRound ? currentRound.toLocaleString() : 'Unknown' }
        </Text>
        <Text marginTop={4} fontSize='sm'>
          {
            props.mode === 'create'
              ? `You will need to pay ${props.tools.reachLib.formatCurrency(props.tools.MIN_CONTRACT_FUND)} Algos to fund the new smart contract, and your minimum balance will increase by ${props.tools.reachLib.formatCurrency(props.tools.GAME_MASTER_MIN_BAL)} Algos.`
              : ''
          }
        </Text>

        {/* Game Name */}
        <FormControl isInvalid={errors.gameName} isRequired marginTop={8}>
          <FormLabel htmlFor='gameName'>Game name</FormLabel>
          <Input
            id='gameName'
            maxWidth='30rem'
            {...register('gameName', {
              required: 'This is required',
              minLength: { value: 2, message: 'Minimum length should be 2' },
              maxLength: { value: 64, message: 'Maximum length should be 64' },
            })}

          />
          <FormErrorMessage>
            {errors.gameName && errors.gameName.message}
          </FormErrorMessage>
        </FormControl>

        {/* Start round */}
        <FormControl isInvalid={errors.startRound} isRequired marginTop={6}>
          <FormLabel htmlFor='startRound'>Start round</FormLabel>
          <NumberInput
            precision={0}
            step={1000}
            min={1}
            maxWidth='10rem'
            onChange={(v) => {setApproxStartTime(props.tools.calculateFutureRoundTime(v, currentRound)); setValue('startRound', v);}}
            inputMode='numeric'
            value={getValues('startRound') ? getValues('startRound') : ''}
          >
            <NumberInputField
              id='startRound'
              {...register('startRound', {
                valueAsNumber: true,
                required: 'This is required',
                min: { value: 1, message: 'The start round must be greater than 0' },
              })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button size='sm' marginTop={2} onClick={() => {setValue('startRound', currentRound); setApproxStartTime(props.tools.calculateFutureRoundTime(currentRound, currentRound)) }}>Set to current round</Button>
          <FormHelperText>
            {
              approxStartTime &&
              <>
                Approximately on {approxStartTime.toLocaleDateString()} at {approxStartTime.toLocaleTimeString(props.tools.userLocale, {timeZoneName: 'short'})}
              </>
            }
          </FormHelperText>
          <FormErrorMessage>
            {errors.startRound && errors.startRound.message}
          </FormErrorMessage>
        </FormControl>

        {/* End round */}
        <FormControl isInvalid={errors.endRound} isRequired marginTop={6}>
          <FormLabel htmlFor='endRound'>End round</FormLabel>
          <NumberInput
            precision={0}
            step={1000}
            min={1}
            maxWidth='10rem'
            onChange={(v) => {setApproxEndTime(props.tools.calculateFutureRoundTime(v, currentRound)); setValue('endRound', v);}}
            inputMode='numeric'
            value={getValues('endRound') ? getValues('endRound') : ''}
          >
            <NumberInputField
              id='endRound'
              {...register('endRound', {
                valueAsNumber: true,
                required: 'This is required',
                min: { value: startRoundWatch + 1, message: 'The end round must be greater than the start round' },
              })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button size='sm' marginTop={2} onClick={() => {setValue('endRound', currentRound); setApproxEndTime(props.tools.calculateFutureRoundTime(currentRound, currentRound)) }}>Set to current round</Button>
          <FormHelperText>
            {
              approxEndTime &&
              <>
                Approximately on {approxEndTime.toLocaleDateString()} at {approxEndTime.toLocaleTimeString(props.tools.userLocale, {timeZoneName: 'short'})}
              </>
            }
          </FormHelperText>
          <FormErrorMessage>
            {errors.endRound && errors.endRound.message}
          </FormErrorMessage>
        </FormControl>

        {/* Cool-down */}
        <FormControl isInvalid={errors.coolDown} isRequired marginTop={6}>
          <FormLabel htmlFor='coolDown'>Cool-down length (in rounds)</FormLabel>
          <NumberInput
              precision={0}
              min={0}
              maxWidth='8rem'
              onChange={(v) => {setApproxCoolDownTime(props.tools.calculateRoundTimeSpan(v)); setValue('coolDown', v);}}
              inputMode='numeric'
            >
            <NumberInputField
              id='coolDown'
              {...register('coolDown', {
                valueAsNumber: true,
                required: 'This is required',
                min: { value: 0, message: 'Minimum should be 0' },
              })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
            <FormHelperText>
              About { approxCoolDownTime === null ? '0 seconds' : `${approxCoolDownTime[0]} ${approxCoolDownTime[1]}` }
            </FormHelperText>
          <FormErrorMessage>
            {errors.coolDown && errors.coolDown.message}
          </FormErrorMessage>
        </FormControl>

        {/* Tile colors */}
        <Box display='flex' direction='row' minWidth='30rem' marginTop={6}>
          <FormControl isInvalid={errors['colors.0']} isRequired>
            <FormLabel htmlFor='color1'>Color #1</FormLabel>
            <Input
              id='color1'
              type='color'
              maxWidth='8rem'
              {...register('colors.0', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors['colors.0'] && errors['colors.0'].message}
            </FormErrorMessage>
            <FormHelperText>
              Color when a tile is not set.
            </FormHelperText>
          </FormControl>

          <FormControl isInvalid={errors['colors.1']} isRequired>
            <FormLabel htmlFor='color2'>Color #2</FormLabel>
            <Input
              id='color2'
              type='color'
              maxWidth='8rem'
              {...register('colors.1', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors['colors.1'] && errors['colors.1'].message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors['colors.2']} isRequired>
            <FormLabel htmlFor='color3'>Color #3</FormLabel>
            <Input
              id='color3'
              type='color'
              maxWidth='8rem'
              {...register('colors.2', {
                required: 'This is required',
              })}
            />
            <FormErrorMessage>
              {errors['colors.2'] && errors['colors.2'].message}
            </FormErrorMessage>
          </FormControl>
        </Box>

        <Button colorScheme='purple' isLoading={isSubmitting} type='submit' marginTop={16} width='100%'>
          Submit
        </Button>
      </form>
    </Center>
  );
}

export default GameRulesForm;
