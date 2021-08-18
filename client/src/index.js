import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <ApolloProvider>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root')
// );
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql"
  // uri: "/graphql"
});

ReactDOM.render(

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
