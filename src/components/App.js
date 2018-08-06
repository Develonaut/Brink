import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';

import "../stylesheets/base/fonts.css";
import "../stylesheets/base/global.css";
import "../stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Brink React</title>
          <meta name="description" content="A faux landing page for Brink! A News and Alerts Hockey app that provides daily updates to all your devices!" />
          <meta name="keywords" content="app, landing page, brink, ryan mchenry, news, alerts, updates, mobile, desktop, email, sign up" />
        </Helmet>
        <Hero />
      </div>
    );
  }
}

export default App;
