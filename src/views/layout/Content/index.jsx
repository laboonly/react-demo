
import React from "react";
import {  Route, Switch } from "react-router-dom";
import { Layout  } from "antd"
import routeList from "@/config/routeMap";
// import Game from '@/views/demo'
import './index.scss'

const { Content } = Layout;

const LayoutContent = () => {
    return(
        <Content  className="main">
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