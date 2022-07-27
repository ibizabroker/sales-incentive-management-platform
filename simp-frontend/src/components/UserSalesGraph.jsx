import React, { Component } from 'react'

import UserChart from './UserChart'

import UserNavbar from './UserNavbar'


export default class UserSalesGraph extends Component {
    constructor(props) {
      super(props);

      this.state = { 
      };
    }


    render() {
        return (
            <div >
                <UserNavbar />
               <div className='container mt-5 center'>
                 <UserChart />
               </div>
            </div>
        );
    }
}



