import React from 'react'
import {Route} from 'react-router'
import App from '../App.js'
import FeedContainer from '../components/FeedContainer.js'
import Splash from '../components/Splash.js'

export default (
  <Route path='/' component={App}>
    <Route path='/feed' component={FeedContainer} />
    <Route path='/splash' component={Splash} />
  </Route>
)
