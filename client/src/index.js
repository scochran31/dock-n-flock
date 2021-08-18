import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <ApolloProvider>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root')
// );
<<<<<<< HEAD
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql"
  // uri: "/graphql"
});
=======
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: "http://localhost:4000/graphql"
// });
>>>>>>> 2f2e2ed0d137498c56414d4bd1aab1fbf4c03462

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
