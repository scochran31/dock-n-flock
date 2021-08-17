import React from 'react';
import Login from './Login'
import {
    Stack,
    Box,
    StackDivider,
    Container,
    Text,
    Link
} from "@chakra-ui/react";


function Home() {
    return (
        <div>
            <Stack
                direction={['column', 'row']}
                spacing={4}
                divider={<StackDivider borderColor='gray.400' />}
                p='2vh'
            >
                <Box w='50%' h='auto'></Box>
                <Box w='50%' h='auto'>
                    <Box
                        p='5vh'
                        borderRadius='50px'
                        shadow='md'
                        borderWidth='2px'
                    >
                        <Login />
                        <Container pt='3vh'>
                            <Text fontSize='Xl'>Need to create an account?{' '} <Link color='hotpink'>Sign up{' '}</Link>by clicking this link!</Text>
                        </Container>
                    </Box>
                </Box>
            </Stack>
        </div>
    )
}

export default Home;
