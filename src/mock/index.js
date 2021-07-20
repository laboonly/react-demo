/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-20 10:16:43 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-20, 10:16:43 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import Mock from "mockjs";

import tableAPI from "./table";



// table
Mock.mock(/\/table\/list/, "post", tableAPI.tableList);

export default Mock