import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { Form, Input, Button, message, Spin, } from 'antd'
import { login, getUserInfo } from "@/store/actions";
import "./index.scss";


// import { login, getUserInfo } from "@/store/actions";



const Login: React.FC<any> = (props: any) => {
    const {  token, login, getUserInfo } = props;
    // const [form] = Form.useForm();


    const [loading, setLoading] = React.useState(false)

    const handleLogin = (username: String, password: String) => {
        setLoading(true);
        login(username, password)
        .then((data: any) => {
            message.success("登陆成功");
            handleUserInfo(data.token);
        })
        .catch((error: any) => {
            setLoading(false);
            message.error(error);
        })
    }

    // 获取用户信息
    const handleUserInfo = (token: any) => {
        getUserInfo(token)
            .then((data: any) => {
                console.log(data)
            })
            .catch((error: any) => {
                message.error(error);
            });
    };

    const handleSubmit = (values: any) => {
        console.log(values)
        // // 对所有表单字段进行检验
        // form.validateFields((err: any, values: any) => {
        //   // 检验成功
        //   if (!err) {
        //     const { username, password } = values;
        //     handleLogin(username, password);
        //   } else {
        //     console.log("检验失败!");
        //   }
        // });
        const { username, password } = values;
            handleLogin(username, password);
      };
    if(token) {
        return <Redirect to="/dashboard" />;
    }
    return(
        <>
            <div className="login-container">
                <Form onFinish={handleSubmit}  className="content">
                    <div className="title">
                        <h2>用户登录</h2>
                    </div>
                    <Spin spinning={loading} tip="登录中...">
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
                            type="password"
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
                    </Spin>
                </Form>
            </div>
        </>
    )
}


export default connect((state: any) => state.user, {login, getUserInfo})(Login);