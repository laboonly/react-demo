/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-07 4:26:25 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-23, 10:46:33 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React, { useEffect, useRef, useState } from 'react'
import { Table, Tag, Divider, Form, Input,Select, Button, message } from 'antd'
import './index.scss'
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { tableList, deleteItem, editItem } from "@/api/table"
import  EditForm  from './form/editForm'

const TableComponent = () => {
    // 表格数据
    const [tableData, setTableDate] = useState();
    
    // 进入页面获取表格数据,
    // TODO 后面考虑使用 use-data-api
    useEffect(() => {
        fecthData()
     }, []);
 
     // 获取表格数据
     const fecthData = () => {
         tableList(pageQuery).then((response) => {
             const list = response.data.data.items;
             console.log('list', list)
             const total = response.data.data.total;
            
             setTotal(total)
             setTableDate(list)
         })
     }

    // 表单数据
    const [form] = Form.useForm();
    
    // 筛选条件API参数
    const pageQuery = {
        pageNumber: 1,
        pageSize: 10,
        title: "",
        star: "",
        status:""
    }
    
    // 筛选完成
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
    
    // 表格总数
    const [total, setTotal] =  useState(0)

    // 弹窗显示与否
    const [editModalVisible, setEditModalVisible] = useState(false)

    // 当前编辑框数据
    const [currentRowData, setCurrentRowData] = useState({
        id: 0,
        author: "",
        date: "",
        readings: 0,
        star: "★",
        status: "published",
        title: ""
    })
       // 显示弹窗
    const handleShow = (record) => {
        console.log('record', record)
        setCurrentRowData(record)
        
        setEditModalVisible(true)
    }
    // 弹窗取消
    const handleCancel = () => {
        console.log('close')
        setEditModalVisible(false)
    }
    
    const formRef = useRef(null)
    // 弹窗编辑完成
    const handleOk = () => {
        // setEditModalVisible(true)
        // const { form } = formRef.current.props;
        console.log(formRef.current)
        formRef.current.validateFields().then(fieldsValue => {
            console.log(fieldsValue)
            const values = {
                ...fieldsValue,
                'star': "".padStart(fieldsValue['star'], '★'),
                'date': fieldsValue['date'].format('YYYY-MM-DD HH:mm:ss'),
              };
             
              editItem(values).then((response) => {
                // form.resetFields();
                // this.setState({ editModalVisible: false, editModalLoading: false });
                message.success("编辑成功!")
                setEditModalVisible(false)
                fecthData()
              }).catch(e => {
                message.success("编辑失败,请重试!")
                // setEditModalVisible(false)
              })
        }).catch(errorInfo => {
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
    
    // 删除表格数据
    const handDelete = async (record) => {
       
        const res = await deleteItem({id:record.id});
        if(res) {
            message.success("删除成功")
            fecthData();
        }
        // deleteItem({id:record.id}).then(res => {
        //     message.success("删除成功")
        //     that.fetchData();
        //   })
    }

    // 表格配置
    const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        align: 'center'
    },
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        align: 'center'
    },
    {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
        align: 'center'
    },
    {
        title: '阅读量',
        dataIndex: 'readings',
        key: 'readings',
        align: 'center'
    },
    {
        title: '重要度',
        key: 'star',
        dataIndex: 'star',
        align: 'center'
    },
    {
        title: '状态',
        key: 'status',
        dataIndex: 'status',
        align: 'center',
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
        dataIndex: 'date',
        align: 'center'
    },
    {
        title: 'Action',
        key: 'action',
        align: 'center',
        // TODO 理解这里为什么要使用bind
        render: (text, record) => (
            <span>
                <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={handleShow.bind(null,record)} title="编辑" /> 
                <Divider type="vertical" />
                <Button type="primary" shape="circle" icon={<DeleteOutlined />} onClick={handDelete.bind(null,record)} title="删除" />
            </span>
        )
    }
    ];
    
    


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
            <Table  bordered dataSource={tableData} columns={columns} onChange={pageChange}  pagination={{ total: total, showQuickJumper: true, showSizeChanger: true } } />
            <EditForm  
                currentRowData={currentRowData}
                childRef={formRef}
                visible={editModalVisible} 
                onCancel={handleCancel}
                onOk={handleOk} 
            />
        </div>
      
    )   
}

export default TableComponent