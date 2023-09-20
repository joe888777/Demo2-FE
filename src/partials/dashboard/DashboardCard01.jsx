import React from 'react';
import { getImage } from '../../utils/api';
import { useEffect, useState } from 'react';
import { GRAPH_URL } from '../../core/setting';
import "../../css/additional-styles/graph.css";

function DashboardCard01() {
  const [htmlStr, setHtmlStr] = useState("");
  useEffect(() => {
    getImage().then((res) => {
      setHtmlStr(res.html);
    })
  })
  return (
    <div className='w-full bg-white flex graph'>
    <iframe src={GRAPH_URL}  className='w-full'></iframe>
    </div>
  );
}

export default DashboardCard01;
