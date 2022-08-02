import React, { Component } from 'react'
import AdminNavbar from './AdminNavbar'

export default class ForcedCommissionCalculation extends Component {
  render() {
    return (
        <div>
            <AdminNavbar />
            <div className=" container col-sm-6 offset-md-4 mt-5 mb-2">
            <h2 className="primary"> Forced Commission </h2>
            <form>
            <div className="row mb-3 mt-4">
                    <label className="col-sm-2 col-form-label">User Id:</label>
                    <div className="col-sm-4">
                        <input type="text" className ="form-control" id = "userId"  name="userId" />
                    </div>
                    
                </div> 
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Month :</label>
                    <div className="col-sm-4">
                        <input type="text" className ="form-control" id = "month"  name="month"/>
                    </div>
                    
                </div> 
                
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Commisson:</label>
                    <div className="col-sm-4">
                        <input type="text" className ="form-control" id = "userAmount" name="userAmount" />
                    </div>
                    
                </div>
                
                <button className = "btn btn-primary col-sm-6" onClick={this.saveCommisssion}>Update</button>
      
            </form>
        </div>
        </div>
    )
  }
}