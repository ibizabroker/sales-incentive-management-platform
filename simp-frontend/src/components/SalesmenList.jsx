
import React,{Component} from "react";
import AdminNavbar from "./AdminNavbar";
import UserService from '../services/UserService'

export default class SalesmanList extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        salesmenlist : []
      
      }
      
  }
  componentDidMount(){
    UserService.getSalesMenDetails().then((res) => {
      this.setState({salesmenlist: res.data})
    });
}

  render() {
    return (
      <div>
        <AdminNavbar />
        
        

        <div className='container mt-3 mb-2' >
          <h2 className="text-center">Sales Person List</h2>
          <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    {/* <th> Id</th> */}
                                    <th> Name</th>
                                    <th> Username</th>
                                    <th> UserQuota</th>
                                 
                                </tr>
                            </thead>
                            <tbody>
                            {
                                 
                                 this.state.salesmenlist.map(
                                     users => 
                                     <tr key = {users.userId}>
                                          <td> {users.name} </td>   
                                          <td> {users.username}</td>
                                          <td> {users.userQuota}</td>
                                    
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
