/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-20 10:16:43 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-20, 10:33:05 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import Mock from "mockjs";

import tableAPI from "./table";



// table
Mock.mock(/\/table\/list/, "post", tableAPI.tableList);
Mock.mock(/\/table\/delete/, "post", tableAPI.deleteItem);
Mock.mock(/\/table\/edit/, "post", tableAPI.editItem);

export default Mock