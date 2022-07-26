import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'

import UserNavbar from './UserNavbar'


export default class UserSalesGraph extends Component {
    constructor(props) {
      super(props);

      this.state = {
          
        series: [{
          name: 'Sales',
          data: [44, 55, 57, 56, 61, 58, 63]
        }, {
          name: 'Quota',
          data: [76, 85, 101, 98, 87, 105, 91]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          },
          yaxis: {
            title: {
              text: 'Value'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " thousands"
              }
            }
          }
        },
      };
    }


    render() {
        return (
            <div>
                <UserNavbar />
                <div id="chart" className='container mt-5'>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                </div>
            </div>
        );
    }
}



