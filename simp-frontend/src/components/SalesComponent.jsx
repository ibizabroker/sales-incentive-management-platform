import React, { Component } from 'react'
import UserService from '../services/UserService'
import UserNavbar from './UserNavbar'

export default class SalesComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      salesdetails : []
    
    }
    
}
componentDidMount(){
    UserService.getSalesDetails().then((res) => {
      this.setState({salesdetails: res.data})
      
    });
}
  render() {
    return (
      <div>
        <UserNavbar />
        <div className='container mt-4'>
                 <h2 className="text-center">Sales Details</h2>
                 {/* <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br> */}
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                
                                    {/* <th> Sales Id </th> */}
                                    <th>User Id</th>
                                    <th> Month</th>
                                    <th> Product Type</th>
                                    <th> Product Id</th> 
                                    <th>Product Name </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                 
                                    this.state.salesdetails.map(
                                        sales => 
                                        <tr key = {sales.salesId}>
                                             <td> {sales.userId} </td>   
                                             <td> {sales.transactionMonth}</td>
                                             <td> {sales.pType}</td>
                                             <td> {sales.pId}</td>
                                             <td> {sales.pName}</td>
                                             
                                             
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
