import React from 'react'
import { Box, Button } from "@chakra-ui/react"
import ParkingMap from '../ParkingMap'

const TMItem = ({ item }) => {
    return (
        <Box mt='10' className='card'>
            <Box className='card-inner'>
                <Box className='card-front'>
                    <img src={item.images[2].url} alt='' />
                </Box>
                <Box className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Date:</strong> {item.dates.start.localDate}
                        </li>
                        <li>
                            <strong>Time:</strong> {item.dates.start.localTime}
                        </li>
                        <li>
                            <strong>Venue:</strong> {item._embedded.venues[0].name}
                        </li>
                        <li>
                            <Button colorScheme='teal'>
                                <a href={item.url} target='_blank' rel="noreferrer noopener">Buy Tickets!</a>
                            </Button>
                            <ParkingMap item={item} colorScheme='teal'/>
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}

export default TMItem
