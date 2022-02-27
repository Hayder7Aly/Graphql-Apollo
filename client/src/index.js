import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import App from "./components/App"
import client from "./client"
import './index.css'

ReactDOM.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
     <App />
  </ApolloProvider>
  </BrowserRouter>,
document.getElementById('root')
);



