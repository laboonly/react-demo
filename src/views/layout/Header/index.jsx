/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-24 9:18:55 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2020-12-24, 9:18:55 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */
import React  from 'react';

import {  Layout, Dropdown, Avatar, Menu, Modal } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getUserInfo } from "@/store/actions";
import "./index.scss";
const { Header } = Layout;



const LayoutHeader = (props) => {
    const {
        token,
        avatar,
        logout,
      } = props;
      const handleLogout = (token) => {
        Modal.confirm({
          title: "注销",
          content: "确定要退出系统吗?",
          okText: "确定",
          cancelText: "取消",
          onOk: () => {
            logout(token);
          },
        });
      };
    
    const onClick = ({ key }) => {
        switch (key) {
          case "logout":
            handleLogout(token);
            break;
          default:
            break;
        }
      };
    
    const menu = (
        <Menu onClick={onClick}>
          <Menu.Item key="dashboard">
            <Link to="/dashboard">首页</Link>
          </Menu.Item>
          <Menu.Item key="project">
            <a
              target="_blank"
              href="https://github.com/NLRX-WJC/react-antd-admin-template"
              rel="noopener noreferrer"
            >
              项目地址
            </a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="logout">注销</Menu.Item>
        </Menu>
      );
    return (
        <Header className="site-layout-background" style={{ padding: 0 }} >
             <div className="right-menu">
                
                <div className="dropdown-wrap">
                    <Dropdown overlay={menu}>
                    <div>
                        <Avatar shape="square" size="medium" src={avatar} />
                        {/* <Icon style={{ color: "rgba(0,0,0,.3)" }} type="caret-down" /> */}
                    </div>
                    </Dropdown>
                </div>
            </div>
        </Header>
    );
}

const mapStateToProps = (state) => {
    return {
      ...state.user,
    };
  };

export default  connect(mapStateToProps, { logout, getUserInfo })(LayoutHeader)