import React from 'react'

import {
    Box,
    Stack,
    ButtonGroup, 
    IconButton,
    Text
    
} from "@chakra-ui/react"
import { GoMarkGithub } from "react-icons/go";


const Copyright = (props) => (
    <Text fontSize="sm" {...props}>
      &copy; {new Date().getFullYear()} Dock-N-Flock, Inc. All rights reserved.
    </Text>
  )


export const Footer = (props) => (
    
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
        
         <Text fontSize="sm" justify="center" {...props}>
    &copy; {new Date().getFullYear()} Dock-N-Flock. All rights reserved.
        </Text>
        
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="center">
          
        <ButtonGroup variant="black" color="gray.200" {...props}>
    
        <IconButton as="a" href="https://github.com/scochran31" aria-label="GitHub" icon={<GoMarkGithub fontSize="20px" />}  />
        <IconButton as="a" href="https://github.com/MEaston12" aria-label="GitHub" icon={<GoMarkGithub fontSize="20px" />}  />
        <IconButton as="a" href="https://github.com/cpesar" aria-label="GitHub" icon={<GoMarkGithub fontSize="20px" />}  />
        <IconButton as="a" href="https://github.com/mandahos" aria-label="GitHub" icon={<GoMarkGithub fontSize="20px" />} />
        

    
  </ButtonGroup>
  
        </Stack>
        {/* <Copyright
          alignSelf={{
            base: 'center',
            sm: 'start',
          }}
        /> */}
      </Stack>
    </Box>
   
  )

  

export default Footer;