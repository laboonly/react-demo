/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-16 9:56:02 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-16, 3:29:12 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */


import React from 'react'

// 底部切换显示状态列表
import Footer from '../../components/Footer'

// 容器组件添加todo列表
import AddTodo from '../../container/AddTodo'

// 容器组件显示todo列表
import VisibleTodoList from '../../container/VisibleTodoList'

const todoView = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default todoView