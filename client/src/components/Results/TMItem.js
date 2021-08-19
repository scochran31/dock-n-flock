import React from 'react'
import { Box, Button, Center, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import ParkingMap from '../ParkingMap'

const TMItem = ({ item }) => {
  return (
    <Box mt='10' className='card'>
      <Box bgColor='gray.800' className='card-inner'>
        <Center className='card-front'>
          <Image src={item.images[2].url} alt='' />
        </Center>
        <Box className='card-back' overflowY='scroll'>
          <Text fontSize='2xl'>{item.name}</Text>
          <UnorderedList>
            <ListItem>
              <strong>Date:</strong> {item.dates.start.localDate}
            </ListItem>
            <ListItem>
              <strong>Time:</strong> {item.dates.start.localTime}
            </ListItem>
            <ListItem>
              <strong>Venue:</strong> {item._embedded.venues[0].name}
            </ListItem>
          </UnorderedList>
          <Button m={1} w='100%' colorScheme='teal'>
                <a href={item.url} target='_blank' rel="noreferrer noopener">Buy Tickets!</a>
          </Button>
          <ParkingMap item={item} colorScheme='teal' />
        </Box>
      </Box>
    </Box>
  )
}

export default TMItem
