// react
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// service worker
import registerServiceWorker from './registerServiceWorker'

// config
import { ROOT } from './config/variables.config.js'

// application
import App from './App.jsx'

/*
 * Entry point. Renders React components onto index.html
 */

// render Story
ReactDOM.render(<App />, ROOT.app)

registerServiceWorker()
