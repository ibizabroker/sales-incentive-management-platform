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
        <div>
            <AdminNavbar />
            <div className = "container mt-5">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3 mt-2">
                        <h3 className="text-center mt-4">Add Salesman</h3>
                        <div className = "card-body">
                            <form autocomplete="off">

                                <div className = "form-group">
                                    <label> Name: </label>
                                    <input type="text" placeholder='Full Name' className ="form-control" id = "name"  name="name" 
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                </div>

                                <div className = "form-group mt-3">
                                    <label> Username: </label>
                                    <input type="text" placeholder='UserName' className ="form-control" id = "username"  name="username"
                                        value={this.state.username} onChange={this.changeUserNameHandler} />
                                </div>

                                <div className = "form-group mt-3">
                                    <label> Password: </label>
                                    <input type="password" placeholder='Password' className ="form-control" id = "password" name="password" 
                                        value={this.state.password} onChange={this.changePasswordHandler}/>
                                </div>

                                <div className = "form-group mt-3">
                                    <label> User Quota: </label>
                                    <input type="text" placeholder='Quota per month' className ="form-control" id = "userquota"  name="userquota"
                                        value={this.state.userQuota} onChange={this.changeUserQuotaHandler} />
                                </div>

                                <div className='text-center'>
                                    <button className="btn btn-outline-dark btn-info mt-3 addbutton" onClick={this.saveUser}> Add </button>
                                </div>                                   
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default withRouter(AddSalesman);