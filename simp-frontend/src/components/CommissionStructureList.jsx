import React, { Component } from 'react'
import UserService from '../services/UserService';
import AdminNavbar from './AdminNavbar';
import { withRouter } from '../services/withRouter';
class CommissionStructureList extends Component {
  constructor(props){
    super(props)
    this.state={
       commissions:[]
    }
    this.updateCommission=this.updateCommission.bind(this);
  }
  updateCommission(commissionId){
    
    this.props.router.navigate(`/admin/updateCommission/${commissionId}`,{state:{commissionId:commissionId}});
    console.log(this.props);
    //this.props.navigate(`/admin/updateCommission/${commissionId}`);
  }
  componentDidMount(){
    UserService.getAllCommissionStructure().then((res) => {
        this.setState({commissions:res.data});
    });
}

  render() {
    return (
        <div>
        <AdminNavbar />

        <div className='container mt-4'>
        <h2 className="text-center">Commission Structure</h2>
        <div className = "row">
               <table className = "table table-striped table-bordered">

                   <thead>
                       <tr>
                           <th>Commission Id</th>
                           <th>Product Type Id</th>
                           <th>Upper Limit</th>
                           <th>Lower Limit</th>
                           <th> Commission</th>
                           
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.commissions.map(
                               commission=> 
                               <tr key = {commission.commissionId}>
                                    <td>{commission.commissionId}</td>
                                    <td> {commission.productTypeId} </td>       
                                    <td> {commission.endRange}</td>
                                    <td> {commission.startRange} </td>
                                    <td> {commission.commissionPercentage}</td>
                                    
                                    <td><button onClick={() =>this.updateCommission(commission.commissionId)} className="btn btn-info">Update </button></td>
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
export default withRouter(CommissionStructureList)