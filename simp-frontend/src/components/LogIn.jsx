import React, { Component } from 'react'

export default class LogIn extends Component {
  render() {
    return (
        <div className=" container col-sm-6 offset-md-4 mt-5 mb-2">
            <h2 className="primary"> Login Page </h2>
            <form>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Username:</label>
                    <div className="col-sm-4">
                        <input type="text" className ="form-control" id = "username"  name="username" />
                    </div>
                    
                </div> 
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-4">
                        <input type="password" className ="form-control" id = "password" name="password" />
                    </div>
                    
                </div>
                <button className = "btn btn-primary col-sm-6" type ="submit">Login</button>
      
            </form>
        </div>
    )
  }
}