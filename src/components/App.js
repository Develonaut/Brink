import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import Info from '../components/Info';
import Devices from '../components/Devices';
import Footer from '../components/Footer';

import "../stylesheets/base/fonts.css";
import "../stylesheets/base/global.css";
import "../stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charset="utf-8"/>
          <title>Brink React</title>
          <meta name="description" content="A faux landing page for Brink! A News and Alerts Hockey app that provides daily updates to all your devices!"/>
          <meta name="keywords" content="app, landing page, brink, ryan mchenry, news, alerts, updates, mobile, desktop, email, sign up"/>
          <meta name="robots" content="index, follow" />
          <meta content="width=device-width, initial-scale=1" name="viewport"/>
          <link rel="author" href="https://www.behance.net/ryanmmchen5ffb" />
          <link rel="canonical" href="https://develonaut.github.io/brink-react/" />
        </Helmet>
        <Hero />
        <main>
          <Info />
          <Devices />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
