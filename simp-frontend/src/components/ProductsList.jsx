import React, { Component } from 'react'
import AdminNavbar from "./AdminNavbar";
import UserService from '../services/UserService'

export default class ProductsList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          productslist : []
        }
        
    }
    componentDidMount(){
      UserService.getAllProducts().then((res) => {
        this.setState({productslist: res.data})
        console.log(res)
      });
    }
  
    render() {
      return (
        <div>
            <AdminNavbar />         
         
            <div className='container mt-3 mb-2' >
                <h2 className="text-center head">Products List</h2>
                <div className = "row">
                    <table className = "table table-dark table-striped table-bordered">  
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Cost</th> 
                            </tr>
                        </thead>
                        <tbody>
                        {                                  
                            this.state.productslist.map(
                                products => 
                                <tr key = {products.pId}>
                                    <td> {products.pName} </td>   
                                    <td> {products.pType} </td>
                                    <td> {products.pCost} </td>
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
