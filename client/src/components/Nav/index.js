import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    Box,
    Heading,
    Button,
    Image,
    SimpleGrid,
    Flex
} from "@chakra-ui/react"
import { motion } from 'framer-motion'
import logo from '../../Assets/Dock-N-Flock-logo-white.png'
export default function Header() {
    return (
        <Flex wrap='wrap'>
        <Heading h='auto' mb='10' color='white' backgroundColor='gray.500'>
            <SimpleGrid columns='3'>
                <Box></Box>
                <Box p="2.5" display='flex' alignItems='center' justifyContent='space-around'>
                    <NavLink to='/'>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity }}>
                            <Image
                                width='250px'
                                height='150px'
                                objectFit='cover'
                                pos
                                src={logo}
                                alt='logo' />
                        </motion.div>
                    </NavLink>
                </Box>
                    <Flex wrap='wrap' alignItems='center'>
                    <NavLink to='/signup'>
                        <Button colorScheme='yellow' mt='4'>Signup</Button>
                    </NavLink>
                    <NavLink to='/search'>
                        <Button colorScheme='yellow' mt='4'>Search</Button>
                    </NavLink>
                    <NavLink to='/parkingGarage'>
                        <Button colorScheme='yellow' mt='4'>Parking Garage</Button>
                        </NavLink>
                    </Flex>
            </SimpleGrid>
        </Heading>
        </Flex>
    )
}
