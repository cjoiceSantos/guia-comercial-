import React from 'react';

import "./App.css"

import {
  BrowserRouter as Router,
} from 'react-router-dom'

import Header from "../../components/header/header";
import RouterView from '../../components/RouterView';
import Footer from '../../components/footer/footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <RouterView />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
