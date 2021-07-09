/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-07 4:26:25 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-09, 1:42:46 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React from 'react'
import { Table, Tag, Space } from 'antd'
import './index.scss'

import data from './tableJson'

const TableComponent = () => {
    
      
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
    return (
        <div className="header" id="head">
            <Table dataSource={data} columns={columns}  pagination={{ total: 30, showQuickJumper: true, showSizeChanger: true }} />;
        </div>
    )   
}

export default TableComponent