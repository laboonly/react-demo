/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-23 3:17:19 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2020-12-23, 3:17:19 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React, { Component } from 'react';
// import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

import Router from "./router";

class App extends Component {
  render() { 
    return (
      <ConfigProvider >
        {/* <Provider> */}
          <Router />
        {/* </Provider> */}
      </ConfigProvider>
    );
  }
}
 
export default App;

