import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Interceptor from "./interceptor";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
// if we have post request
// axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use(
  (request) => {
    // console.log(request);
    // we need to return request otherwise we are blocking request
    // also we can edit request by adding header etc..
    return request;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);
// this function is recieving request
axios.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Interceptor />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
