
import Loadable from 'react-loadable';
import Loading from '@/components/Loading'

const Dashboard = Loadable({ loader: () => import(/*webpackChunkName:'Dashboard'*/'@views/dashboard') , loading: Loading});
const Game = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/game') , loading: Loading});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    { path: "/dashboard", component: Dashboard },
    { path: "/game", component: Game }
];