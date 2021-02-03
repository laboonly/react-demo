/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-24 9:19:48 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2020-12-24, 9:19:48 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React from "react";
import { Layout } from "antd";
import Menu from "./Menu";
import './index.scss';

const { Sider } = Layout;
const LayoutSider = (props) => {
    const { sidebarCollapsed } = props;
    return(
        <Sider
        collapsible
        collapsed={sidebarCollapsed}
        trigger={null}
        >
            <div className="logo" />
            <Menu />
        </Sider>
    );
}

export default LayoutSider