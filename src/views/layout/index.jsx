/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-23 4:55:20 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2020-12-23, 4:55:20 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */
import React  from 'react';
import { Layout } from 'antd';


import Content from "./Content";
import Header from "./Header";
// import RightPanel from "./RightPanel";
import Sider from "./Sider";


const Main = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider />
            <Layout>
                <Header />
                <Content />
                {/* <RightPanel /> */}
            </Layout>
        </Layout>
    );
}
 
export default Main