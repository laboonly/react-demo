import * as React from 'react'

import { Form, Input, Button } from 'antd'

import "./index.scss";

// import { login, getUserInfo } from "@/store/actions";

const Login: React.FC = () => {
    // const [form] = Form.useForm();

    // const handleSubmit = (event: any) => {
    //     // 阻止事件的默认行为
    //     event.preventDefault();
    //     console.log(event)
    //     // 对所有表单字段进行检验
    //     form.validateFields((err, values) => {
    //       // 检验成功
    //       if (!err) {
    //         const { username, password } = values;
    //         handleLogin(username, password);
    //       } else {
    //         console.log("检验失败!");
    //       }
    //     });
    //   };

    return(
        <>
            <div className="login-container">
                <Form  className="content">
                    <div className="title">
                        <h2>用户登录</h2>
                    </div>
                    <Form.Item
                        name="username"
                    >
                        <Input 
                        placeholder="用户名"   
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                    >
                        <Input 
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        登录
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default Login