import React, { Component } from 'react'
import UserService from '../services/UserService'
import UserNavbar from './UserNavbar'

export default class UserCommission extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          usercommission : [],
          userId:JSON.parse(window.localStorage.getItem('user')).userId
        }
        
    }
   
    componentDidMount(){
      UserService.getUserCommissionDetail(this.state.userId).then((res) => {
        this.setState({usercommission: res.data})
      });
  }
  
  render() {
      
    return (
        <div>
          <UserNavbar />  
          <div className='container mt-3 mb-2' >
            <h2 className="text-center">Commission</h2>
            <div className = "row">
                          <table className = "table table-striped table-bordered">
  
                              <thead>
                                  <tr>
                                      {/* <th> Id</th> */}
                                      <th>Month</th>
                                      <th>Commission</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {                                   
                                   this.state.usercommission.map(
                                       users => 
                                       <tr key = {users.transactionId}>
                                            <td> {users.transactionMonth}</td>
                                            <td> {users.userAmount} </td>                                                                                                                           
                                       </tr>
                                   )
                              }
                              </tbody>                              
                          </table>  
                   </div>
          </div>
        </div>        
      )
  }
}
