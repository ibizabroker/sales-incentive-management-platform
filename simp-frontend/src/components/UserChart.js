// import React from 'react';
// import Chart from "react-apexcharts";

// const MyCharts = () => {
//   const series = [ //data on the y-axis
//     {
//         name: 'Sales',
//         data: [1000,2000]
//       }, {
//         name: 'Quota',
//         data: [10000,20000]
//       }

//   ];
//   const options = { //data on the x-axis
//     chart: { id: 'bar-chart'},
//     xaxis: {
//       categories: []
//     }
//   };
 
import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const MyCharts = () => {
  const [userAmount, setUserAmount] = useState([]);
  const [userQuota, setUserQuota] = useState([]);
  const [transactionMonth, setTransactionMonth] = useState([]);

  useEffect(() => {
    const getData = async () => {
    const userId = JSON.parse(window.localStorage.getItem('user')).userId   
    const url = `http://localhost:8080/user/saleschart?userId=${userId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setUserAmount(data?.map((item) => item.userAmount));
      setUserQuota(data?.map((item) => item.userQuota));
      setTransactionMonth(data?.map((item) => item.transactionMonth));
    } catch (error) {
        console.log(error);
    }
  };
    getData();
  }, []);
 
  const dataPoints = transactionMonth.length;
  console.log(transactionMonth)
  console.log(transactionMonth.length)

  const series = [ //data on the y-axis
    {
      name: "User Amount",
      data: userAmount
    }, {
        name: "User Quota",
      data: userQuota
    }
  ];

  const options = { //data on the x-axis
    chart: { id: 'bar-chart'},
    xaxis: {
      // categories: ["May","August"]
      categories: transactionMonth,
      tickAmount: dataPoints
    },
    title: {
      text: 'Graph for Monthly Commission vs Quota',
      align: 'center',
      style: {
        fontFamily: 'Nunito',
        fontSize: '24px'
      }
    }
  };

  return (
    <div className=''>
      <Chart
        options={options}
        series={series}
        align='center'
        type='bar'
        width='60%'
      />
    </div>
  )
}

export default MyCharts;