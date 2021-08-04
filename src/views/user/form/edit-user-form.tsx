/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-27 9:41:21 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-27, 4:53:50 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import * as React from 'react'

import { Modal, Form, Input, Select } from 'antd';

const { TextArea } = Input

interface Props {
    currentEditRowData: { id: String, name: String, role: String, description: String },
    visible: boolean | undefined,
    onCancel: (...args: any[]) => any,
    onOk: (...args: any[]) => any,
    childRef: any
}


const EditUserForm: React.FC<Props> = ({ currentEditRowData, visible, onCancel, onOk, childRef }) => {
    
    const [form] = Form.useForm();

    const { id, name, role, description } = currentEditRowData;
    console.log('currentRowData---->', currentEditRowData)
    const formInitValue =  {
        id: id,
        name: name,
        role: role,
        description: description,
       
      }
    React.useEffect(() => {
        form.setFieldsValue(formInitValue)
     }, [currentEditRowData]);
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
                    label="用户id:"
                    name="id"
                >
                     <Input  disabled />
                </Form.Item>
                <Form.Item
                    label="用户名称:"
                    name="name"
                >
                     <Input />
                </Form.Item>
                <Form.Item
                    label="用户角色:"
                    name="role"
                >
                     <Select placeholder="类型"  disabled>
                        <Select.Option value="admin">admin</Select.Option>
                        <Select.Option value="editor">editor</Select.Option>
                        <Select.Option value="guest">guest</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="用户描述:"
                    name="description"
                >
                    <TextArea></TextArea>
                </Form.Item>
            </Form>
        </Modal>
    )  
}

export default EditUserForm