import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(requestCnfg => {
    console.log(requestCnfg)
    // always return request config
    return requestCnfg;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(requestCnfg => {
    console.log(requestCnfg)
    // always return response config
    return requestCnfg;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
