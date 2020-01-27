import React, { Component } from 'react'

import HeaderBanner from './components/HeaderBanner'
import IconDocs from './components/IconDocs';

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <HeaderBanner />
        <IconDocs />
      </React.Fragment>
    )
  }
}
