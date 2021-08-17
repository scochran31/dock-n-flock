
import React, { useState } from 'react';

// import { ApolloProvider } from '@apollo/client';
// import { useMutation, ApolloProvider } from '@apollo/react-hooks';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {
  Flex,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel
} from '@chakra-ui/react';





function Signup() {

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  // const [emailAddress, setEmailAddress] = useState('')
  // const [password, setPassword] = useState('')
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = target => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // use try/catch to handle errors
    try {
      // execute addUser mutation and pass in varaible data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log(data);

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    setFormState({ username: '', email: '', password: ''})
  }


  return (
    
      <Flex justifyContent='center'>
      <Box boxShadow='sm' ml='2'>
          <form method='POST' action='submit' onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor='username' padding='2'>Username</FormLabel>
              <Input
              name='username'
                id='username'
                value={formState.username}
              onChange={({ target }) => handleChange(target)} />
            {/* //   onChange={handleChange} /> */}

              <FormLabel htmlFor='email' padding='2'>Email Address</FormLabel>
              <Input
              name='email'
                id='email'
                value={formState.email}
                onChange={({ target }) => handleChange(target)} />
            {/* onChange={handleChange} /> */}

              <FormLabel padding='2'>Password</FormLabel>
              <Input
                isRequired
              name='password'
              id='password'
              type='password'
                value={formState.password}
                onChange={({ target }) => handleChange(target)} />
            {/* onChange={handleChange} /> */}
            </FormControl>


            <FormControl mt='2'>
              <Button type='submit' colorScheme='teal'>Sign Up!</Button>
            </FormControl>
          </form>
          {/* Display error if there is an error */}
          {error && <div>Signup failed</div>}
        </Box>
      </Flex>
   
  )
}

export default Signup
