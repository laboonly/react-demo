/*
 * Description: reauired, the file description, reference link, etc.
 * Created Date: 2020-12-25 4:01:11 PM
 * Author: Liu Yi <ly@hcttop.com>
 * -----
 * Last Modified: 2020-12-25, 4:01:11 PM
 * Modified By: Liu Yi <ly@hcttop.com>
 */

import React, { useEffect } from "react";
import { Spin } from "antd";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const Loading = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className="app-container">
      <Spin />
    </div>
  );
};

export default Loading;
