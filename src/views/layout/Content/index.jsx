
import React from "react";
import {  Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Layout  } from "antd"
import routeList from "@/config/routeMap";
// import Game from '@/views/demo'
import './index.scss'

const { Content } = Layout;



const LayoutContent = (props) => {
    const { role, location } = props;
    const handleFilter = (route) => {
        // 过滤没有权限的页面
        return role === "admin" || !route.roles || route.roles.includes(role);
      };
    return(
        <Content  className="main">
            <Switch>
                {routeList.map((route) => {
                   return(  
                    handleFilter(route) && (
                        <Route
                        component={route.component}
                        key={route.path}
                        path={route.path}
                        />
                    )
                   );
                })}
            </Switch>
        </Content>
    );
}

export default connect((state) => state.user)(withRouter(LayoutContent));