/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-23 3:49:23 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-01-18, 1:21:51 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { connect } from "react-redux";
// import { getUserInfo } from "@/store/actions";
import Layout from "@/views/layout";
import Login from "@/views/login";
class Router extends React.Component {
  render() {
    // const { token, role, getUserInfo } = this.props;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
            //   if (!token) {
            //     return <Redirect to="/login" />;
            //   } else {
            //     if (role) {
            //       return <Layout />;
            //     } else {
            //       getUserInfo(token).then(() => <Layout />);
            //     }
            //   }
                return <Layout />
            }}
          />
        </Switch>
      </HashRouter>
    );
  }
}

// export default connect((state) => state.user, { getUserInfo })(Router);

export default Router