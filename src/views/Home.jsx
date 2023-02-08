import React, { useState, useEffect, Suspense } from "react";
import { Typography } from 'antd';
import TableStandar from "../components/TableStandar";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import { getBillingData } from "../utils/UtilService";

export default function home() {
  const [loading, setLoading] = useState(true);
    const columnas = [
        {
          title: "Id",
          dataIndex: "_id",
          defaultSortOrder: "descend",
          sorter: (a, b) => a._id - b._id,
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Country",
          dataIndex: "COUNTRY_ISO",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.COUNTRY_ISO - b.COUNTRY_ISO,
        },
        {
          title: "Document Type",
          dataIndex: "DOCUMENT_TYPE",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.DOCUMENT_TYPE - b.DOCUMENT_TYPE,
        },
        {
          title: "Document Data",
          dataIndex: "ISSUE_DATE",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.ISSUE_DATE - b.ISSUE_DATE,
        },
        {
          title: "Legal Invoice Numbre",
          dataIndex: "_rev",
          defaultSortOrder: "descend",
          sorter: (a, b) => a._rev - b._rev,
        },
        {
          title: "Contract",
          dataIndex: "CONTRACT_NBR",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.CONTRACT_NBR - b.CONTRACT_NBR,
        },
        {
          title: "Net Contract Amount",
          dataIndex: "NET_AMOUNT",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.NET_AMOUNT - b.NET_AMOUNT,
          render: (text) => <a>{text}</a>,
        },
      ];
      const { Title } = Typography;


  const [bills, setBills] = useState([]);

  useEffect(() => {
    getBillingData().then((res) => setBills(res));
    setLoading(false);
  }, []);

  return <>
  <Navbar/>
  <Title>Current Bills</Title>
  <Spinner loading={loading}/>
  <TableStandar data={bills} colms={columnas}/>
  </>
  
}
