/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-07 4:26:25 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-21, 5:45:16 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React, { useEffect, useState } from 'react'
import { Table, Tag, Divider, Form, Input,Select, Button } from 'antd'
import './index.scss'
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { tableList } from "@/api/table"
import  EditForm  from './form/editForm'

const TableComponent = () => {
    const [formData, setFormDate] = useState();
    
    const pageQuery = {
        pageNumber: 1,
        pageSize: 10,
        title: "",
        star: "",
        status:""
    }
    const [total, setTotal] =  useState(0)
    const [editModalVisible, setEditModalVisible] = useState(true)
    const [form] = Form.useForm();
    
    const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: '阅读量',
        dataIndex: 'readings',
        key: 'readings',
    },
    {
        title: '重要度',
        key: 'star',
        dataIndex: 'star',
    },
    {
        title: '状态',
        key: 'status',
        dataIndex: 'status',
        render: (text) => { 
                let color = text === "published" ? "green" : text === "deleted" ? "red" : ""; 
                                
                return ( <Tag color={color}>
                    {text}
                    </Tag>
                )
            }
    },
    {
        title: '时间',
        key: 'date',
        dataIndex: 'date'
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button type="primary" shape="circle" icon={<EditOutlined />} title="编辑" />
                <Divider type="vertical" />
                <Button type="primary" shape="circle" icon={<DeleteOutlined />} title="删除" />
            </span>
        )
    }
    ];
    
    useEffect(() => {
       fecthData()
    }, []);
    const fecthData = () => {
        tableList(pageQuery).then((response) => {
            const list = response.data.data.items;
            console.log('list', list)
            const total = response.data.data.total;
           
            setTotal(total)
            setFormDate(list)
        })
    }
    const onFinish = (values) => {
        console.log('Success:', values);
      
        pageQuery.title = values.title
        pageQuery.status = values.status
        pageQuery.star = values.star
        fecthData()
    };

   

    // 分页变化触发
    const pageChange = (pagination) => {
        console.log('pagination---->', pagination)
        
        pageQuery.pageNumber =  pagination.current
        fecthData()
    }

    return (
        <div className="header" id="head">
            <Form
            className="filter-form"
            name="basic"
            layout="inline"
            form={form}
            onFinish={onFinish}
            >
                <Form.Item 
                name="title"
                >
                    <Input placeholder="标题" maxLength={200} />
                </Form.Item>
                <Form.Item name="star" width={150}>
                    <Select placeholder="推荐指数"  style={{ width: 120 }}>
                        <Select.Option value={1}>★</Select.Option>
                        <Select.Option value={2}>★★</Select.Option>
                        <Select.Option value={3}>★★★</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="status" width={150}>
                    <Select placeholder="类型"  style={{ width: 120 }}>
                        <Select.Option value="published">published</Select.Option>
                        <Select.Option value="draft">draft</Select.Option>
                    </Select>
                </Form.Item>
               <Form.Item>
                    <Button type="primary" htmlType="submit">
                    搜索
                    </Button>
               </Form.Item>
            </Form>
            <Table dataSource={formData} columns={columns} onChange={pageChange}  pagination={{ total: total, showQuickJumper: true, showSizeChanger: true } } />
            <EditForm  visible={editModalVisible} />
        </div>
      
    )   
}

export default TableComponent