/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-23 3:17:19 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-05-06, 3:29:10 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React, { Component } from 'react';
import { Provider } from "react-redux";

import { ConfigProvider } from "antd";
import store from './store'
import Router from "./router";



class App extends Component {
  render() { 
    return (
      <ConfigProvider >
        <Provider store={store}>
          <Router />
        </Provider>
      </ConfigProvider>
    );
  }
}
 
export default App;

