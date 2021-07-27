/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-27 9:41:21 AM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-27, 4:53:50 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import * as React from 'react'

import { Modal  , Form, Input, Rate, Select, DatePicker  } from 'antd';


interface Props {
    visible: Boolean
}


const editForm: React.FC<Props> = (props) => {
    return (
        <Modal
            title="编辑"
            visible={props.visible} 
        >

        </Modal>
    )  
}

export default editForm