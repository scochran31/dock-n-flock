
import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
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

const Signup = () => {

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = event => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch to handle errors
    try{
      // execute addUser mutation and pass in varaible data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
      
    Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };


return (
    <Flex justifyContent='center'>
        <Box ml='2'>
            <form method='POST' onSubmit={handleFormSubmit}>
                <FormControl>
                    <FormLabel htmlFor='username' padding='2'>Username</FormLabel>
                    <Input type='username'
                        id='username'
                        value={formState.username}
                        onChange={({ target }) => handleChange(target.value)} />

                <FormLabel htmlFor='email' padding='2'>Email Address</FormLabel>
                    <Input type='email'
                        id='email'
                        value={formState.email}
                        onChange={({ target }) => handleChange(target.value)} />

                <FormLabel padding='2'>Password</FormLabel>
                    <Input
                        isRequired
                        type='password'
                        id='password'
                        value={formState.password}
                        onChange={({ target }) => handleChange(target.value)} />
                </FormControl>


                <FormControl mt='2'>
                    <Button type='submit' colorScheme='teal'>Sign Up</Button>
                </FormControl>
            </form>
                {/* Display error if there is an error */}
                {error && <div>Signup failed</div>}
        </Box>
    </Flex>
    )
}

export default Signup
