import React, { Component } from 'react';
import StyleModuleDemo from './sub-com/styleModulesDemo'
import AxiosHttpDemo from './sub-com/axios-http-demo'

class Demo extends Component {
  render() {
    return (
      <div>
        <StyleModuleDemo />
        <AxiosHttpDemo />
      </div>
    )
  }
}

export default Demo;