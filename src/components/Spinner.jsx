import React, { useState } from "react";
import { Spin } from "antd";
import '../App.css'
const Spinner = ({ loading }) => {
  return (
    <div className="container">
      <Spin spinning={loading} tip="Loading..."></Spin>
    </div>
  );
};
export default Spinner;
