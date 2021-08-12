import React, { useState } from 'react'
import TMList from '../components/Results/TMList'
import axios from 'axios'
import env from 'react-dotenv'
import '../App.css'

import {
    // Flex,
    SimpleGrid,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button
} from "@chakra-ui/react"

function Search() {
    const [formState, setFormState] = useState({ city: '', event: '' });
    const { city, event } = formState;
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        const result = await axios(
            `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${env.TM_KEY}&city=${city}&keyword=${event}&size=4`
        );
        const ev = result.data._embedded.events;
        setItems(ev);
        setIsLoading(false);
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    return (
        <Box p='5'>
            <FormControl>
                <SimpleGrid columns="2" spacing={10}>
                    <Box>
                        <FormLabel p='2'>
                            What city are you looking in?
                        </FormLabel>
                        <Input
                            type='text'
                            id='city'
                            name='city'
                            defaultValue={city}
                            onBlur={handleChange} />
                    </Box>

                    <Box>
                        <FormLabel p='2'>
                            What are you searching for?
                        </FormLabel>
                        <Input
                            id='event'
                            type='text'
                            name='event'
                            defaultValue={event}
                            onBlur={handleChange}
                        />
                    </Box>
                </SimpleGrid >
            </FormControl>
            <FormControl mt='2'>
                <Button onClick={handleSubmit} colorScheme='teal'>Search Now!</Button>
            </FormControl>
            <TMList isLoading={isLoading} items={items} />
        </Box>
    )
}

export default Search;