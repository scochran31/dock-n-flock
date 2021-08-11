import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
} from "@chakra-ui/react"

function Account() {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    // const isInvalid = password === '' || emailAddress === '';

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('emailAddress', emailAddress)
        console.log('passwoord', password)
        console.log('I was submitted')
    }

    return (
        <Flex justifyContent='center'>
            <Box ml='2'>
                <form method='POST' onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel htmlFor='email' padding='2'
                        >Email Address</FormLabel>
                        <Input type='email'
                            id='email'
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)} />
                        <FormLabel padding='2'>Password</FormLabel>
                        <Input
                            isRequired
                            type='password'
                            id='password'
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} />
                    </FormControl>
                    <FormControl mt='2'>
                        <Button type='submit' colorScheme='teal'>Sign In</Button>
                    </FormControl>
                </form>
            </Box>
        </Flex>
    )
}

export default Account
