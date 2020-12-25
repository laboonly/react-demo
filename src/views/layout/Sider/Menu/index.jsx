/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-25 3:10:20 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2020-12-25, 3:10:20 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React from "react"
import {  Menu } from 'antd';
import { Link, withRouter } from "react-router-dom";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

const Meun = () => {
    return(
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/dashboard">nav 1</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/game">nav 2</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          nav 4
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          nav 5
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          nav 7
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
          nav 8
        </Menu.Item>
      </Menu>
    );
}


export default Meun