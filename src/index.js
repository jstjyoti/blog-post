import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';

//potentially manipulating the data, commonly adding header etc...global axios
var myInterceptor = Axios.interceptors.request.use(req =>
  {
    console.log(req);
    //edit request config, for task you want to do globally for requests
    return req;
  }, error =>{
    return Promise.reject(error);
    //handled locally in catch of component
  }
);

Axios.interceptors.response.use(res =>
  {
    console.log(res);
    //edit request config, for task you want to do globally for requests
    return res;
  }, error =>{
    return Promise.reject(error);
    //handled locally in catch of component
  }
);
//removing an interceptor
Axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
