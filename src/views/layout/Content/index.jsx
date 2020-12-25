/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-24 9:19:25 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2020-12-24, 9:19:25 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React from "react";
import { Redirect, withRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd"
import routeList from "@/config/routeMap";
// import Game from '@/views/demo'

const { Content } = Layout;

const LayoutContent = () => {
    return(
        <Content>
            <Switch>
                {routeList.map((route) => {
                   return(  
                    <Route
                        component={route.component}
                        key={route.path}
                        path={route.path}
                     ></Route>
                   );
                })}
            </Switch>
        </Content>
    );
}

export default LayoutContent