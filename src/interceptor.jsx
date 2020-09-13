import React, { Component } from "react";
import axiosinstance from "./axios";

class Interceptor extends Component {
  componentDidMount() {
    this.sendRequest();
  }
  sendRequest() {
    axiosinstance
      .get("/posts")
      .then((request) => {
        // const posts = response.data;
        // console.log(response);
        request.headers["header"] = "https://anyURL";
        console.log(request);
        alert("request sucess clicked");
        return request;
      })
      .catch(function (error) {
        // handle error
        alert("request sucess not working :(");
      });
  }
  sendErrorRequest() {
    axiosinstance
      .get("/posts")
      .then((request) => {
        request.request["status"] = 400;

        alert("request faild not working");
        return request;
      })
      .catch(function (error) {
        // handle error
        alert("request faild clicked");
        return error;
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.sendRequest}>get sucess request </button>
        <button onClick={this.sendErrorRequest}>get faild request </button>
      </div>
    );
  }
}
export default Interceptor;
