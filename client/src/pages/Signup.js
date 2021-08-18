import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import {
  Flex,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,

} from '@chakra-ui/react';





function Signup() {

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
    <Flex justifyContent='center'>
      <Box
        p='5vh'
        borderRadius='50px'
        shadow='md'
        borderWidth='2px'
        bgColor='whiteAlpha.700'
      >
        <form method='POST' action='submit' onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor='username' padding='2'>Username:</FormLabel>
            <Input
              borderColor='gray.700'
              borderWidth='thin'
              variant='solid'
              name='username'
              type='username'
              id='username'
              value={formState.username}
              onChange={handleChange} />

            <FormLabel htmlFor='email' padding='2'>Email Address:</FormLabel>
            <Input
              borderColor='gray.700'
              borderWidth='thin'
              variant='solid'
              name='email'
              type='email'
              id='email'
              value={formState.email}
              onChange={handleChange} />

            <FormLabel padding='2'>Password:</FormLabel>
            <Input
              borderColor='gray.700'
              borderWidth='thin'
              variant='solid'
              placeholder='******'
              // isRequired
              name='password'
              id='password'
              type='password'
              value={formState.password}
              onChange={handleChange} />
          </FormControl>


          <FormControl mt='2'>
            <Button type='submit' colorScheme='blue'>Sign Up!</Button>
          </FormControl>
        </form>
        {/* Display error if there is an error */}
        {error && <div>Signup failed</div>}
      </Box>
    </Flex>

  )
}

export default Signup
