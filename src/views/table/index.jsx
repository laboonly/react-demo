/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-07 4:26:25 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-20, 4:17:51 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React, { useEffect, useState } from 'react'
import { Table, Space, Form, Input,Select, Button } from 'antd'
import './index.scss'

import data from './tableJson'

import { tableList } from "@/api/table"


const TableComponent = () => {
    const [formData, setFormDate] = useState(data);
    const [pageQuery, setPageQuery] = useState({
        pageNumber: 1,
        pageSize: 10,
        title: "",
        star: "",
        status:""
    });
    const [total, setTotal] =  useState(0)
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
        title: 'Tags',
        key: 'star',
        dataIndex: 'star',
    },
    {
        title: '状态',
        key: 'status',
        dataIndex: 'status'
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a href="/">Invite {record.name}</a>
                <a href="/">Delete</a>
            </Space>
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
        setPageQuery(
            {
                ...pageQuery,
                title: values.title,
            }
        )
        fecthData()
    };

   

    // 分页变化触发
    const pageChange = (pagination) => {
        setPageQuery(
            {
                ...pageQuery,
                pageNumber: pagination,
            }
        )
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
                <Form.Item name="importance" minLength={100}>
                    <Select placeholder="重要性">
                        <Select.Option value="1">1</Select.Option>
                        <Select.Option value="2">2</Select.Option>
                        <Select.Option value="3">3</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="type" minLength={100}>
                    <Select placeholder="类型">
                        <Select.Option value="CN">CN</Select.Option>
                        <Select.Option value="US">JP</Select.Option>
                        <Select.Option value="EU">EU</Select.Option>
                    </Select>
                </Form.Item>
               <Form.Item>
                    <Button type="primary" htmlType="submit">
                    搜索
                    </Button>
               </Form.Item>
            </Form>
            <Table dataSource={formData} columns={columns} onChange={pageChange}  pagination={{ total: total, showQuickJumper: true, showSizeChanger: true } } />
        </div>
    )   
}

export default TableComponent