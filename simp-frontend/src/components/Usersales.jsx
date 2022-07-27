import React, { Component } from 'react'
import UserNavbar from './UserNavbar'


export default class Usersales extends Component {
  constructor(props) {
    super(props)

    this.state = {
      salesdetails : []
    
    }
    
}
    
  render() {
    return (
      <div>
        <UserNavbar />
        <div className='container mt-4'>
          <form>
            <label for="month">Select Month : </label>
            <input type="month" className='ms-2'/>
          </form>
        </div>
        

        <div className='container mt-3 mb-2' >
          <h2 className="text-center"> My Sales Details</h2>
          <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                
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
                                        <td> {sales.ptype}</td>
                                        <td> {sales.pid}</td>
                                        <td> {sales.pname}</td>
                                        
                                        
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
