import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <Main />
      </>
    );
  }
}
