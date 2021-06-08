import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { ThemeProvider } from "@chakra-ui/core";
import './Components/style.css'
import Header from "./Components/Header";
import Form from "./Components/Search";
import Appmain from "./Appmain";
ReactDOM.render(
  <Router>
      <Appmain />
  </Router>
  ,

  document.getElementById('root'),
);

// const rootElement = document.getElementById("root")
// render(<App />, rootElement)
