import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ChakraProvider, Box } from "@chakra-ui/react"
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Signup from './pages/Signup'
import Footer from './components/Footer'
import ParkingGarage from './pages/ParkingGarage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'
import garagePhoto from './Assets/ParkingGarage.png'


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);

  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: '/graphql' }),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Box bgImage={garagePhoto} bgPosition='center' minH='100vh' h='100%' w='100%' position='sticky' >
          <Router>
            <Nav />
            <Switch>
              <Route path='/login'><Login /></Route>
              <Route path='/signup'><Signup /></Route>
              <Route path='/parkingGarage'><ParkingGarage /></Route>
              <Route path='/search'><Search /></Route>
              <Route path='/'><Home /></Route>
            </Switch>
            <Footer />
          </Router>
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App;