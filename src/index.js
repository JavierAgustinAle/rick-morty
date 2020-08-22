import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import generateStore from './Redux/store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

let store = generateStore()

let client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
})

let WithRouter = () => <React.StrictMode><App /></React.StrictMode>
let WithStore = () => <Provider store={store}> <WithRouter /></Provider>
let WithApollo = () => <ApolloProvider client={client}><WithStore /></ApolloProvider>

ReactDOM.render(<WithApollo />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
