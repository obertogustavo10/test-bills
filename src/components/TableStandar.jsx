import React from "react";
import { Table } from "antd";
export default function TableStandar({ data, colms }) {
  return <Table dataSource={data} columns={colms} />;
}
