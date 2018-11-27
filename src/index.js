// react
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// service worker
import registerServiceWorker from './registerServiceWorker';

// config
import { APP_ROOT } from './config/variables.config.js';

// application
import App from './App.jsx';

/* eslint-disable no-unused-expressions */

/*
 * Entry point. Renders React components onto index.html
 */

// render Story
ReactDOM.render(<App />, APP_ROOT);

registerServiceWorker();
