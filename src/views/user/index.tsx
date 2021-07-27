/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-23 2:07:25 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-27, 9:29:02 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import * as React from 'react'
// import { useEffect, useState } from 'react'
import {  Card, Button, Table, Divider } from 'antd'
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { getUsers } from "@/api/user"

const User: React.FC = () => {

    

    const columns: Array<object> = [
        {
            title: '用户ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center'
        },
        {
            title: '用户名称',
            dataIndex: 'name',
            key: 'name',
            align: 'center'
        },
        {
            title: '用户角色',
            dataIndex: 'role',
            key: 'role',
            align: 'center'
        },
        {
            title: '用户角色',
            dataIndex: 'description',
            key: 'description',
            align: 'center'
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            // TODO 理解这里为什么要使用bind
            render: (text: any, record: any) => (
                <span>
                    <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={handleShow.bind(null, text, record)} title="编辑" /> 
                    <Divider type="vertical" />
                    <Button type="primary" shape="circle" icon={<DeleteOutlined />} onClick={handDelete.bind(null, text, record)} title="删除" />
                </span>
            )
        }
    ];
    const handleShow = () => {

    }


    const handDelete = () => {
        
    }

     // 表格数据
     const [tableData, setTableDate] = React.useState();
     const [total, setTotal] = React.useState();
    // 进入页面获取表格数据,
    // TODO 后面考虑使用 use-data-api
    React.useEffect(() => {
        fecthUserData()
     }, []);

     // 获取表格数据
    const  fecthUserData = async () => {
        const res = await getUsers()
        
        const { users } = res.data
        setTableDate(users) 
        setTotal(users.length)
    }

    const title = (
        <span>
          <Button type='primary' >添加用户</Button>
        </span>
      )
    return (
        <Card title={title}>
             <Table  bordered  dataSource={tableData} columns={columns}  pagination={{ total: total, showQuickJumper: true, showSizeChanger: true } } />
        </Card>
    )
}

export default User