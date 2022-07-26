import React, { Component } from 'react'

export default class SalesComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      salesdetails : []
    
    }
    
}
  render() {
    return (
      <div>
                 <h2 className="text-center">Sales Details</h2>
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button> */}
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                
                                    <th> Sales Id </th>
                                    <th> Product Id </th>
                                    <th> User Id</th>
                                    <th> Product Name</th>
                                    <th> Product Type</th>
                                    <th> Month</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                 
                                    this.state.salesdetails.map(
                                        sales => 
                                        <tr key = {sales.salesId}>
                                             <td> {sales.pId} </td>   
                                             <td> {sales.userId}</td>
                                             <td> {sales.pName}</td>
                                             <td> {sales.pType}</td>
                                             <td> {sales.transactionMonth}</td>
                                             
                                             <td>
                                                 {/* <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>

    )
  }
}
