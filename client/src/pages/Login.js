import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login() {
  const [formState, setFormState] = useState({email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(`Attempting to log in with ${JSON.stringify(formState)}`)
      const { data } = await login({
        variables: { ...formState }
      });
      Auth.login(data.login.token);
      console.log(`Login success!`);
    } catch (e) {
      console.error(e);
    }
    
  }

  return (
    <Flex justifyContent='center'>
      <Box ml='2'>
        <Text fontSize='3xl'>Log In</Text>
        <form method='POST' action='submit' onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel
              htmlFor='email'
              padding='2'
              fontWeight='bold'
              fontSize='xl'
            >Email Address
            </FormLabel>
            <Input
              borderColor='gray.700'
              borderWidth='thin'
              variant='solid'
              name='email'
              type='email'
              id='email'
              value={formState.email}
              onChange={handleChange} />

            <FormLabel
              padding='2'
              fontWeight='bold'
              fontSize='xl'
            >Password
            </FormLabel>
            <Input
              borderColor='gray.700'
              borderWidth='thin'
              variant='solid'
              isRequired
              name='password'
              type='password'
              id='password'
              value={formState.password}
              onChange={handleChange} />
          </FormControl>
          <FormControl mt='2'>
            <Button type='submit' colorScheme='blue'>Sign In</Button>
          </FormControl>
        </form>
      </Box>
    </Flex>
  )
}

export default Login;
