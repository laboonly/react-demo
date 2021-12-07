import React, { useState, useEffect } from "react"
import {  Menu } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import {
//     AppstoreOutlined,
//     BarChartOutlined,
//     CloudOutlined,
//     ShopOutlined,
//     TeamOutlined,
//     UserOutlined,
//     UploadOutlined,
//     VideoCameraOutlined,
//   } from '@ant-design/icons';

// 路由的树型结构
import menuList from "@/config/menuConfig";
const SubMenu = Menu.SubMenu;

const Meun = (props) => {
    const { role } = props;
    const [menuTreeNode, setMenuTreeNode] = useState(null)

    const filterMenuItem = (item) => {
      const { roles } = item;
      
      
      if ( role === "admin" || !roles || roles.includes(role) ) {
        return true
      } else if (item.children) {
        return !!item.children.find((child) => roles.includes(child.role));
      }
      return false
    }

    const getMenuNodes = (menuList) => {
      // 得到当前请求的路由路径
      const path = props.location.pathname;

      return menuList.reduce((pre, item) => {
          
          if(filterMenuItem(item)) {
             if(!item.children) {
               pre.push(
                <Menu.Item key={item.path}>
                  <Link to={item.path}>
                    {/* {item.icon ? <Icon type={item.icon} /> : null} */}
                    <span>{item.title}</span>
                  </Link>
                </Menu.Item>
               )
             } else {
                // 查找一个与当前请求路径匹配的子Item
                const cItem = item.children.find(
                  (cItem) => path.indexOf(cItem.path) === 0
                );

                // 如果存在, 说明当前item的子列表需要打开
                if (cItem) {
                  //.....
                }
                // 向pre添加<SubMenu>
                pre.push(
                  <SubMenu
                    key={item.path}
                    title={
                      <span>
                        {/* {item.icon ? <Icon type={item.icon} /> : null} */}
                        <span>{item.title}</span>
                      </span>
                    }
                  >
                    {this.getMenuNodes(item.children)}
                  </SubMenu>
                )
             }
          }
          return pre;
      }, []);
    }
    
    useEffect(() => {
      
      const menuTree = getMenuNodes(menuList);
     
      console.log('menuTree', props,role);
      setMenuTreeNode(menuTree);
    }, [role])

    return(
        // <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        //   <Menu.Item key="1" icon={<UserOutlined />}>
        //     <Link to="/dashboard">首页</Link>
        //   </Menu.Item>
        //   <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        //     <Link to="/game">游戏</Link>
        //   </Menu.Item>
        //   <Menu.Item key="3" icon={<UploadOutlined />}>
        //     <Link to="/table" >表格</Link>
        //   </Menu.Item>
        //   <Menu.Item key="4" icon={<BarChartOutlined />}>
        //     <Link to="/todoList" >待办事项</Link>
        //   </Menu.Item>
        //   <Menu.Item key="5" icon={<CloudOutlined />}>
        //     <Link to="/user" >用户管理</Link>
        //   </Menu.Item>
        //   <Menu.Item key="6" icon={<AppstoreOutlined />}>
        //     nav 6
        //   </Menu.Item>
        //   <Menu.Item key="7" icon={<TeamOutlined />}>
        //     nav 7
        //   </Menu.Item>
        //   <Menu.Item key="8" icon={<ShopOutlined />}>
        //     nav 8
        //   </Menu.Item>
        // </Menu>
        <div>
          <Menu
                            mode="inline"
                            theme="dark"
                            // selectedKeys={[path]}
                            // defaultOpenKeys={openKey}
                          >
          { menuTreeNode && menuTreeNode.map((item, index) => (
                          
                            item
                         
                  ))}
          </Menu>
        </div>
    );
}


export default connect((state) => state.user)(withRouter(Meun));