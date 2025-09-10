import React, { use, useEffect, useState } from 'react'
import styles from './AdminHome.module.css'
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '최근 10일간 매출',
    },
  },
};

const labels = ['9일전', '8일전', '7일전', '6일전', '5일전', '4일전', '3일전', '2일전', '어제', '오늘'];

const AdminHome = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get('/api/buys/sales')
    .then(res => {
      console.log(res.data);
      setSales(res.data)
    })
    .catch(e => console.log(e))
  }, [])

 const data = {
  labels,
  datasets: [
    {
      label: '단위 원(￦)',
      data: sales.map((e, i) => e),
      borderColor: '#188452',
      backgroundColor: '#95a2ad',
    }
  ],
};

  return (
    <div className={styles.container}>
      <div className={styles.first_row}>
        <div className="">오늘의 매출</div>
        <div className="">전체 매출</div>
        <div className="">오늘의 방문자 수</div>
        <div className="">이번달 방문자 수</div>
      </div>
      <div className={styles.second_row}>
        <Line options={options} data={data} />
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  )
}

export default AdminHome