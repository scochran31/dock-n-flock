import React from 'react'
import { Box, ChakraProvider } from "@chakra-ui/react"
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Signup from './pages/Signup'
import ParkingGarage from './pages/ParkingGarage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'

import garagePhoto from './Assets/ParkingGarage.png'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box bgImage={garagePhoto} bgPosition='center' h='100%' w='100%' >
        <Nav />
          <Switch>
            <Route path='/login'><Login /></Route>
            <Route path='/signup'><Signup /></Route>
            <Route path='/parkingGarage'><ParkingGarage /></Route>
            <Route path='/search'><Search /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App