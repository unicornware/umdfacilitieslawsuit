/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// NOTICE: importing reactn instead of react
import React, { setGlobal } from 'reactn';

// react router
import { BrowserRouter } from 'react-router-dom';

// google analytics
import Analytics from 'react-router-ga';

// config
import { GOOGLE_ANALYTICS_ID } from './config/secret.config.js';

// components
import Loading from './jsx/components/Loading.jsx';

// layout components
import Landing from './jsx/layout/Landing.jsx';
import Navigation from './jsx/layout/Navigation.jsx';
import Story from './jsx/layout/Story.jsx';
import Footer from './jsx/layout/Footer.jsx';

// style
import './style/css/app.css';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Analytics id={GOOGLE_ANALYTICS_ID} debug>
          <Navigation />
          <Landing />
          <Story />
          <Footer />
        </Analytics>
      </BrowserRouter>
    );
  }
}
