/**
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2021-07-13 6:06:43 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2021-07-16, 9:51:59 AM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React from 'react'
import FilterLink from '../container/FilterLink'

const Footer = () => (
    <p>
        show:
        {' '}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </p>
)

export default  Footer