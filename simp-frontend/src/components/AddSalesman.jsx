import React, { Component } from 'react'
import UserService from '../services/UserService'
import { withRouter } from '../services/withRouter';
import AdminNavbar from './AdminNavbar'

class AddSalesman extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            // id: this.props.match.params.id,
            name: '',
            username: '',
            password: '',
            userQuota: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeUserQuotaHandler = this.changeUserQuotaHandler.bind(this);
        this.saveUser= this.saveUser.bind(this);
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {name: this.state.name, username: this.state.username, password: this.state.password, userQuota: this.state.userQuota};
        console.log('user=> ' + JSON.stringify(user));

        UserService.createSalesmen(user).then(res =>{
            this.props.router.navigate('/admin/salesmen-list');
        });
        
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeUserQuotaHandler= (event) => {
        this.setState({userQuota: event.target.value});
    }

  render() {
    return (
        <div><AdminNavbar />
        <div className=" container col-sm-6 offset-md-4 mt-5 mb-2">
            <h2 className="primary"> Add Salesman </h2>
            <form>
            <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Name:</label>
                    <div className="col-sm-4">
                        <input type="text" className ="form-control" id = "name"  name="name" 
                        value={this.state.name} onChange={this.changeNameHandler}/>
                    </div>
                    
                </div> 
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Username:</label>
                    <div className="col-sm-4">
                        <input type="text" className ="form-control" id = "username"  name="username"
                        value={this.state.username} onChange={this.changeUserNameHandler} />
                    </div>
                    
                </div> 
                
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-4">
                        <input type="password" className ="form-control" id = "password" name="password" 
                        value={this.state.password} onChange={this.changePasswordHandler}/>
                    </div>
                    
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Userquota:</label>
                    <div className="col-sm-4">
                        <input type="text" className ="form-control" id = "userquota"  name="userquota"
                        value={this.state.userQuota} onChange={this.changeUserQuotaHandler} />
                    </div>
                    
                </div> 
                <button className = "btn btn-primary col-sm-6" onClick={this.saveUser}>Add User</button>
      
            </form>
        </div>
        </div>
    )
  }
}

export default withRouter(AddSalesman);