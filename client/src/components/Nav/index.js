import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Heading,
  Button,
  Image,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";

import Auth from '../../utils/auth';

import logo from '../../Assets/Dock-N-Flock-logo-white.png';

export default function Header() {
  const loggedIn = Auth.loggedIn();
  return (
    <Heading h='auto' mb='10' color='white' backgroundColor='blue.800'>
      <SimpleGrid columns={3}>
        <Box></Box>
        <Box p="2.5" display='flex' alignItems='center' justifyContent='space-around'>
          <NavLink to='/'>
            <Image
              width='250px'
              objectFit='scale-down'
              src={logo}
              alt='logo' />
          </NavLink>
        </Box>
        <Flex wrap='wrap' alignItems='center' justifyContent='space-evenly'>
          {!loggedIn && 
            <NavLink to='/signup'>
              <Button colorScheme='yellow' mt='4'>Signup</Button>
            </NavLink>
          }
          {!loggedIn && 
            <NavLink to='/'>
              <Button colorScheme='yellow' mt='4'>Log In</Button>
            </NavLink>
          }
          <NavLink to='/search'>
            <Button colorScheme='yellow' mt='4'>Search</Button>
          </NavLink>
          {loggedIn &&
            <NavLink to='/parkingGarage'>
              <Button colorScheme='yellow' mt='4'>Garage</Button>
            </NavLink>
          }
          {loggedIn &&
            <Button colorScheme='yellow' mt='4' onClick={Auth.logout}>Log Out</Button>
          }
        </Flex>
      </SimpleGrid>
    </Heading>


  )
}
