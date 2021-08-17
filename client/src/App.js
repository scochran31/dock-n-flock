import React from 'react'
import { Box, ChakraProvider } from "@chakra-ui/react"
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Signup from './pages/Signup'
import ParkingGarage from './pages/ParkingGarage'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box>
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

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

export default App;