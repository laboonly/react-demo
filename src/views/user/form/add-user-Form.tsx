import * as React from 'react'
import { Modal, Form, Input, Select } from 'antd';

const { TextArea } = Input

interface Props {
    visible: boolean | undefined,
    onCancel: (...args: any[]) => any,
    onOk: (...args: any[]) => any,
    childRef: any
}


const AddUserForm: React.FC<Props> = ({ visible, onCancel, onOk, childRef }) => {

    const [form] = Form.useForm();
    const formInitValue =  {
        id: "",
        name: "",
        role: "admin",
        description: "",
      }
    React.useEffect(() => {
        form.setFieldsValue(formInitValue)
     }, []);
    return (
        <Modal
            title="增加用户"
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
                    rules={[
                        {
                          required: true,
                        },
                      ]}
                >
                     <Input />
                </Form.Item>
                <Form.Item
                    label="用户名称:"
                    name="name"
                    rules={[
                        {
                          required: true,
                        },
                      ]}
                >
                     <Input />
                </Form.Item>
                <Form.Item
                    label="用户角色:"
                    name="role"
                    initialValue= "admin"
                >
                     <Select placeholder="类型" >
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

export default AddUserForm