import Loadable from 'react-loadable';
import Loading from '@/components/Loading'

const Dashboard = Loadable({ loader: () => import(/*webpackChunkName:'Dashboard'*/'@views/dashboard') , loading: Loading});
const Game = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/game') , loading: Loading});
const Table = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/table'), loading: Loading });
const TodoList = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/todo'), loading: Loading });
const User = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/user'), loading: Loading });
const Demo = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/demo'), loading: Loading });
const Iframe = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/iframe'), loading: Loading });
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    { path: "/dashboard", component: Dashboard },
    { path: "/game", component: Game },
    { path: "/table", component: Table },
    { path: "/todoList", component: TodoList },
    { path: "/user", component: User, roles: ["admin","editor"] },
    { path: "/demo", component: Demo },
    { path: "/iframe", component: Iframe }
];