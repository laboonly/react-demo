/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-05-06 3:29:10 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-16, 1:59:53 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */


import Loadable from 'react-loadable';
import Loading from '@/components/Loading'

const Dashboard = Loadable({ loader: () => import(/*webpackChunkName:'Dashboard'*/'@views/dashboard') , loading: Loading});
const Game = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/game') , loading: Loading});
const Table = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/table'), loading: Loading });
const TodoList = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/todo'), loading: Loading })

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    { path: "/dashboard", component: Dashboard },
    { path: "/game", component: Game },
    { path: "/table", component: Table },
    { path: "/todoList", component: TodoList }
];