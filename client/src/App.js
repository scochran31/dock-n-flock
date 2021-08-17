import React from 'react'
import { ChakraProvider, Box } from "@chakra-ui/react"

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
      <Box bgImage={garagePhoto} bgPosition='center' h='100vh' w='100%' position='sticky' >
        <Router>
          <Nav />
          <Switch>
            <Route path='/login'><Login /></Route>
            <Route path='/signup'><Signup /></Route>
            <Route path='/parkingGarage'><ParkingGarage /></Route>
            <Route path='/search'><Search /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
      </Router>
      </Box>
    </ChakraProvider>
  )
}

// render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root'),
// );

export default App