// react
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// config
import { ROOT } from './config/variables.config.js'

// React application
import App from './components/App'

// Service worker
import * as sw from './config/sw.config'

// Compiled Sass stylesheet
import './sass/app.sass'

/**
 * @file Application entry point
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/** Render application */
ReactDOM.render(<App />, ROOT.app)

/**
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * @see {@link https://bit.ly/CRA-PWA}
 */
sw.unregister()
