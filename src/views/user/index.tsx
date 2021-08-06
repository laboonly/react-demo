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
import {  Card, Button, Table, Divider, message } from 'antd'
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { getUsers, editUser, addUser, deleteUser } from "@/api/user"

import  EditUserForm  from './form/edit-user-form'
import  AddUserForm from './form/add-user-Form'

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
                    <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={handleEditUserShow.bind(null, text, record)} title="编辑" /> 
                    <Divider type="vertical" />
                    <Button type="primary" shape="circle" icon={<DeleteOutlined />} onClick={handDelete.bind(null, text, record)} title="删除" />
                </span>
            )
        }
    ];
   

    // 增加用户弹窗显示与否
    const [addUserModalVisible, setAddUserModalVisible] = React.useState(false)

    // 增加弹窗
    const addFormRef = React.useRef(null) as { current: any }
    
    // 显示增加弹窗
    const handleAddUserShow = () => {
        setAddUserModalVisible(true)
    }

    // 增加弹窗取消
    const handleAddCancel = () => {
        setAddUserModalVisible(false)
    }

    // 增加弹窗确认
    const handleAddOk = () => {
        addFormRef.current.validateFields().then((fieldsValue: any) => {
            console.log(fieldsValue)
            const values = {
                ...fieldsValue,
              };
             
              addUser(values).then((response) => {
                // form.resetFields();
                // this.setState({ editModalVisible: false, editModalLoading: false });
                console.log(response)
                message.success("增加成功!")
                setAddUserModalVisible(false)
                fecthUserData()
              }).catch(e => {
                  console.log(e)
                message.success("增加失败,请重试!")
                // setEditModalVisible(false)
              })
        }).catch((errorInfo: any )=> {
            /*
            errorInfo:
              {
                values: {
                  username: 'username',
                  password: 'password',
                },
                errorFields: [
                  { name: ['password'], errors: ['Please input your Password!'] },
                ],
                outOfDate: false,
              }
            */
            console.log(errorInfo)
        }); 
    }

    // 当前编辑框数据
     const [currentEditRowData, setCurrentEditRowData] = React.useState({
        id: "",
        name: "",
        role: "",
        description: ""
    })


    //  显示编辑弹窗
    const handleEditUserShow = (text: any, record: any) => {
        console.log(text)
        setEditUserModalVisible(true)
        setCurrentEditRowData(record)
    }


    const handDelete = async (text: any, record: any) => {
        console.log(text)
        const res = await deleteUser({id:record.id});
        if(res) {
            message.success("删除成功")
            fecthUserData();
        }
    }
    
    // 编辑弹窗
    const editFormRef = React.useRef(null) as { current: any }

    // 编辑弹窗确认
    const handleEditOk = () => {
        console.log(editFormRef.current)
        
        editFormRef.current.validateFields().then((fieldsValue: any) => {
            console.log(fieldsValue)
            const values = {
                ...fieldsValue,
              };
             
              editUser(values).then((response) => {
                // form.resetFields();
                // this.setState({ editModalVisible: false, editModalLoading: false });
                console.log(response)
                message.success("编辑成功!")
                setEditUserModalVisible(false)
                fecthUserData()
              }).catch(e => {
                  console.log(e)
                message.success("编辑失败,请重试!")
                // setEditModalVisible(false)
              })
        }).catch((errorInfo: any )=> {
            /*
            errorInfo:
              {
                values: {
                  username: 'username',
                  password: 'password',
                },
                errorFields: [
                  { name: ['password'], errors: ['Please input your Password!'] },
                ],
                outOfDate: false,
              }
            */
            console.log(errorInfo)
        }); 
        
    }

    // 编辑弹窗取消
    const handleEditCancel = () => {
        console.log('close')
        setEditUserModalVisible(false)
    }

    
    
    // 编辑弹窗显示与否
    const [editUserModalVisible, setEditUserModalVisible] = React.useState(false)

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
          <Button type='primary' onClick={handleAddUserShow} >添加用户</Button>
        </span>
      )
    return (
        <>
        <Card title={title}>
             <Table  bordered  dataSource={tableData} columns={columns}  pagination={{ total: total, showQuickJumper: true, showSizeChanger: true } } />
        </Card>
        <EditUserForm  
                currentEditRowData={currentEditRowData}
                childRef={editFormRef}
                visible={editUserModalVisible} 
                onCancel={handleEditCancel}
                onOk={handleEditOk} 
            />
        <AddUserForm
            visible={addUserModalVisible} 
            childRef={addFormRef}
            onCancel={handleAddCancel}
            onOk={handleAddOk} 
        />
        </>
    )
}

export default User