/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-25 3:45:43 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2020-12-25, 3:45:43 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import Loadable from 'react-loadable';
import Loading from '@/components/Loading'

const Dashboard = Loadable({ loader: () => import(/*webpackChunkName:'Dashboard'*/'@views/dashboard') , loading: Loading});
const Game = Loadable({ loader: () => import(/*webpackChunkName:'Game'*/'@views/game') , loading: Loading});

export default [
    { path: "/dashboard", component: Dashboard },
    { path: "/game", component: Game }
];