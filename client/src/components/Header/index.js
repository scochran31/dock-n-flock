import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spacer,
    Button
} from "@chakra-ui/react"

export default function Header() {
    return (
        <header>
            <Flex backgroundColor='gray.500'>
                <Box p="2.5" h='5vh'>
                    <Heading size="lg" color='white'>🚙  Dock 'n' Flock  🚗</Heading>
                </Box>
                <Spacer />
                <Box p='2.5'>

                    <Breadcrumb spacing='10px'>
                        <Button colorScheme='teal' mr='4'>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">Sign Up</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Button>

                        <Button colorScheme="teal" mr='4'>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">Log In</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Button>

                        <Button colorScheme='teal' mr='4'>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">Contact Us</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Button>
                    </Breadcrumb>
                </Box>
            </Flex>
        </header>
    )
}
