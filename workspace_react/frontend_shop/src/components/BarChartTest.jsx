import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'
//import faker from 'faker'; //더미 데이터 생성용 라이브러리

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartTest = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };


  //key, value가 변수명, 값이랑 같으면 변수명을 key값에 하나만 넣어도 됨
  const data = {
    labels : ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 56, 300, 200, 90, 150],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [121, 221, 453, 63, 127, 149, 15],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <Bar
        options={options}
        data={data}
      />
    </div>
  )
}

export default BarChartTest