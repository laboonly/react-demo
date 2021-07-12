/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-07 4:26:25 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-12, 2:03:33 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Form, Input,Select, Button } from 'antd'
import './index.scss'

import data from './tableJson'

const TableComponent = () => {
    const [formData, setFormDate] = useState(data);

    const [form] = Form.useForm();

    const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="/">{text}</a>
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {
                    tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                            }
                            return (
                                <Tag color={color} key="tag">{tag.toUpperCase()}</Tag>
                            )
                    })
                }
            </>
        )
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        )
    }
    ];
    
    useEffect(() => {
       
    });

    const onFinish = (values) => {
        console.log('Success:', values);
        console.log(getTableData(values))
        setFormDate(getTableData(values))
    };

    const getTableData = (form) => {
            return  data.filter(x => 
                x.name.indexOf(form.title) !== -1
            )
    };

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
            <Table dataSource={formData} columns={columns}  pagination={{ total: 30, showQuickJumper: true, showSizeChanger: true }} />;
        </div>
    )   
}

export default TableComponent