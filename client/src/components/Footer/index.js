import React from 'react'

import {
    ModalFooter,
    Box,
    Stack,
    ButtonGroup, 
    IconButton,
    Text,
    Copyright,
    
} from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { GoMarkGithub } from 'react-icons/go'

function Contact() {
    return <Icon as={GoMarkGithub} />
}


const Footer = (props) => (
    <ModalFooter>
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{
        base: '4',
        md: '8',
      }}
    >
         <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Dock-N-Flock. All rights reserved.
        </Text>
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          
        <ButtonGroup variant="ghost" color="gray.600" {...props}>
    
        <IconButton as="a" href="https://github.com/scochran31" aria-label="GitHub" icon={< GoMarkGithub fontSize="20px" />} Shawn />
        <IconButton as="a" href="https://github.com/MEaston12" aria-label="GitHub" icon={< GoMarkGithub fontSize="20px" />} Malcolm />
        <IconButton as="a" href="https://github.com/cpesar" aria-label="GitHub" icon={< GoMarkGithub fontSize="20px" />} Chris />
        <IconButton as="a" href="https://github.com/mandahos" aria-label="GitHub" icon={< GoMarkGithub fontSize="20px" />} Amanda />
        <IconButton as="a" href="#" aria-label="GitHub" icon={< GoMarkGithub fontSize="20px" />} Peter />

    
  </ButtonGroup>
        </Stack>
        <Copyright
          alignSelf={{
            base: 'center',
            sm: 'start',
          }}
        />
      </Stack>
    </Box>
    </ModalFooter>
  )


export default Footer;
