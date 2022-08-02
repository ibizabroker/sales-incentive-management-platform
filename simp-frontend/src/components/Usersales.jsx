import React, { Component } from 'react'
import UserNavbar from './UserNavbar'
import UserService from '../services/UserService'

export default class Usersales extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mySales : [],
      transactionMonth: "",
      userId: 4
    }

    this.handleChange = (event) => {
      this.setState({
        transactionMonth: event.target.value
      })

	  
    }

    this.handleSubmit = (event) => {
      event.preventDefault();
      
      UserService.getMySales(this.state.userId, this.state.transactionMonth)
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        this.setState({mySales: res.data})
      })
      .catch(err => console.log(err))
      
    }
  }
    
  render() {
    return (
      <div>
        <UserNavbar />
        <div className='container mt-4'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="month">Select Month : </label>
            <input type="month" className='btn btn-sm btn-outline-primary ms-2 me-2' value={this.state.transactionMonth} onChange={this.handleChange}/>
            <button className='btn btn-sm btn-primary' type="submit">Submit</button>
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
                        this.state.mySales.map(
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
