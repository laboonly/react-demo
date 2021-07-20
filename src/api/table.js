/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-20 11:17:15 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-20, 11:17:15 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import request from '@/utils/request'

export function tableList(data) {
    return request({
        url: '/table/list',
        method: 'post',
        data
    })
}