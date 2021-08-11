import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Header from './components/Header'
// import Login from './pages/Login'
import Search from './pages/Search'

function App() {
  return (
    <ChakraProvider>
      <Header />
      {/* <Login /> */}
      <Search />
    </ChakraProvider>
  )
}

export default App

// import React, { useState, useEffect } from 'react'
// import Header from './components/Header/Header'
// import TMList from './components/Results/TMList'
// import axios from 'axios'
// import './App.css'
// // import env from 'react-dotenv'

// function App() {

//   const [items, setItems] = useState([])
//   const [isLoading, setIsLoading] = useState(true);

// useEffect(() => {
//   const fetchItems = async () => {
//     setIsLoading(true)
//     const result = await axios(
//       `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${env.TM_API}&city=salt lake city&keyword=buble&size=4`
//     )
//     const ev = result.data._embedded.events
//     console.log(ev)

//   useEffect(() => {
//     const fetchItems = async () => {
//       setIsLoading(true)
//       const result = await axios(
//         `https://app.ticketmaster.com/discovery/v2/events.json?apikey=qIYFggG8v6DrcytUgRWaPDN71ORtsG1h&city=salt lake city&keyword=bees&size=4`
//       )
//       const ev = result.data._embedded.events
//       console.log(ev)

//       setItems(ev)
//       setIsLoading(false)
//     }
//     fetchItems()
//   }, [])

//   return (
//     <div className="container">
//       <Header />
//       <TMList isLoading={isLoading} items={items} />
//     </div>
//   );
// }

// export default App;