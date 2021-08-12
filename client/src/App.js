import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Nav from './components/Nav'
// import Home from './pages/Home'
// import Login from './pages/Login'
import Search from './pages/Search'

function App() {
  return (
    <ChakraProvider>
      <div>
        <Nav />
      </div>
      <main>
        {/* <Home /> */}
      {/* <Login /> */}
        <Search />
      </main>
    </ChakraProvider>
  )
}

export default App