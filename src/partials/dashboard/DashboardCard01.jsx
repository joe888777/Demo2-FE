import React from 'react';
import { getImage } from '../../utils/api';
import { useEffect, useState } from 'react';


function DashboardCard01() {
  const [htmlStr, setHtmlStr] = useState("");
  useEffect(() => {
    getImage().then((res) => {
      setHtmlStr(res.html);
    })
  })
  return (
    <div className='w-full bg-white flex '>
    <div dangerouslySetInnerHTML={{__html: htmlStr}}/>
    </div>
  );
}

export default DashboardCard01;
