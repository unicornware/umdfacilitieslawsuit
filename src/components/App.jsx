/* eslint-disable no-undef */

import * as React from 'react'

// react router
import { BrowserRouter } from 'react-router-dom'

// google analytics
import Analytics from 'react-router-ga'

// config
import { GOOGLE_ANALYTICS_ID } from '../config/variables.config'

// components
import { Footer, Landing, Navigation, Story } from './organisms'

export default class App extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        <Analytics id={GOOGLE_ANALYTICS_ID} debug>
          <Navigation />
          <Landing />
          <Story />
          <Footer />
        </Analytics>
      </BrowserRouter>
    )
  }
}
