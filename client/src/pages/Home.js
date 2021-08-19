import React from 'react';
import Login from './Login'
import {
  Flex,
  Stack,
  Box,
  StackDivider,
  Container,
  Text,
  Link,
  Link as ReachLink,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'

function Home() {
  return (
    <Flex>
      <Stack
        direction={['column', 'row']}
        // spacing={4}
        divider={<StackDivider borderColor='blackAlpha.800' />}
        p={5}
      >
        <Box
          p={5}
          borderRadius='50px'
          shadow='md'
          borderWidth='2px'
          bgColor='whiteAlpha.800'
        >
          <Box
            align='center'
            justify='center'>
            <Text
              fontSize={{ base: '24px', md: '32px', lg: '48px' }}
              fontWeight='bold'
              borderBottom='1px'
              pb={2}
            >
              Welcome to Dock'n'Flock!
            </Text>
          </Box>
          <Box
            fontSize={{ base: '12px', md: '16px', lg: '20px' }}
            pt={5}
            pb={5}>
            <Container>
              What is Dock'n'Flock? Only the best app to find your way around and locate areas to dock your flock! Log in or create an account to:
            </Container>
            <List mt={5} spacing={10}>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Search for events!
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Purchase event tickets!
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Find local parking structures to 'Dock' your vehicle!
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Get directions to your docking location!
              </ListItem>
            </List>
            <Container mt={5}>
              Never be without an event ticket, parking location or directions again when you are out and flocking about!
            </Container>
          </Box>
        </Box>
        <Box>
          <Box
            p={5}
            borderRadius='50px'
            shadow='md'
            borderWidth='2px'
            bgColor='whiteAlpha.800'
          >
            <Login />
            <Box align='center' justify='center' pt={5}>
              <Text
                fontSize={{ base: '12px', md: '16px', lg: '20px' }}>
                Need to create an account?{' '}
                <Link as={ReachLink} to='/signup' color='hotpink'>Sign up{' '}
                </Link>
                by clicking this link!
              </Text>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Home;
