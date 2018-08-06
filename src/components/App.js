import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import Info from '../components/Info';

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
          <link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="images/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="images/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="images/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="images/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="images/favicon/images/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/images/favicon-16x16.png"/>
          <link rel="manifest" href="images/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="images/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Hero />
        <main>
          <Info />
        </main>
        <Helmet>
          <script src="https://code.jquery.com/jquery-1.12.4.js" integrity="sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU=" crossorigin="anonymous" />
          <script src="https://www.gstatic.com/firebasejs/4.6.2/firebase-app.js"/>
          <script src="https://www.gstatic.com/firebasejs/4.6.2/firebase-messaging.js"/>
          <script src="https://pushible.com/js/prompt?imp=adx"/>
        </Helmet>
      </div>
    );
  }
}

export default App;
