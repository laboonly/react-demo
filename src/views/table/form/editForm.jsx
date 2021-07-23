/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-21 4:46:30 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-23, 10:33:36 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React, { useEffect } from 'react'
import { Modal, Button, Form, Input, Rate, Select, DatePicker  } from 'antd';

import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

const EditForm = ({currentRowData, visible, onOk, onCancel, childRef }) => {
    const [form] = Form.useForm();
    const { id, author, date, readings, star, status, title } = currentRowData;
    console.log('currentRowData---->', currentRowData)
    const formInitValue =  {
        id: id,
        author: author,
        date: moment(date || "YYYY-MM-DD HH:mm:ss"),
        readings: readings,
        star: star.length,
        status: status,
        title: title,
      }
    useEffect(() => {
        form.setFieldsValue(formInitValue)
     }, [currentRowData]);
    return (
        <Modal 
            title="编辑"
            visible={visible}
            onCancel={onCancel}
            onOk={onOk}
        >
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                form={form}
                ref={childRef}
            >
                <Form.Item
                    label="序号:"
                    name="id"
                >
                     <Input disabled />
                </Form.Item>
                <Form.Item 
                label="标题:"
                name="title"
                rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                    <Input placeholder="标题" />
                </Form.Item>
                <Form.Item 
                label="作者:"
                name="author"
                >
                    <Input placeholder="作者" disabled />
                </Form.Item>
                <Form.Item 
                label="阅读量:"
                name="readings"
                >
                    <Input placeholder="阅读量" disabled />
                </Form.Item>
                <Form.Item
                    label="重要度:"
                    name="star"
                >
                    <Rate count={3} />
                </Form.Item>
                <Form.Item
                    label="状态"
                    name="status"
                >
                    <Select placeholder="类型"  >
                        <Select.Option value="published">published</Select.Option>
                        <Select.Option value="draft">draft</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="时间"
                    name="date"
                >
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditForm