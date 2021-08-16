import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

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
        <Box>
            <Text fontSize='5xl'>This is the Signup Page!</Text>
        </Box>
    )
}

export default Signup
