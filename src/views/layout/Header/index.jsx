/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-24 9:18:55 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2020-12-24, 9:18:55 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */
import React  from 'react';

import {  Layout, Menu } from "antd";
const { Header } = Layout;

const LayoutHeader = () => {
    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>   
        </Header>
    );
}

export default LayoutHeader