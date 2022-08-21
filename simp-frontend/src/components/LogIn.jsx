import React, { Component } from 'react'
import UserService from '../services/UserService'
import { withRouter } from '../services/withRouter'

class LogIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
        // this.changeUserameHandler = this.changeUserameHandler.bind(this);
        // this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.changeUsernameHandler= (event) => {
            this.setState({username: event.target.value});
        }
    
        this.changePasswordHandler= (event) => {
            this.setState({password: event.target.value});
        }
    
        this.handleSubmit = (event) => {
            event.preventDefault();
            const loginDetails = {username: this.state.username, password: this.state.password};
            UserService.authenticate(loginDetails)
            .then((res) =>{
                // console.log(res.data);
                // console.log(res.data.jwtToken);
                // console.log(res.data.user);

                localStorage.setItem("jwtToken", res.data.jwtToken);
                localStorage.setItem("user", JSON.stringify(res.data.user));

                
                const roleName = (JSON.parse(window.localStorage.getItem('user')).role[0].roleName);
                console.log((window.localStorage.getItem('jwtToken')));

                if(roleName==='Admin'){
                    this.props.router.navigate(`/admin/salesmen-list`);
                }
                else{
                    this.props.router.navigate(`/user/allsales`);
                }
            })
            .catch(err => console.log(err))
    
        }
    }

    render() {
        return (
            <div className=" container col-sm-6 offset-md-4 mt-5 mb-2">
                <h2 className="primary"> Login Page </h2>
                <form onSubmit={this.handleSubmit}>

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Username:</label>
                        <div className="col-sm-4">
                            <input type="text" onChange={this.changeUsernameHandler} className ="form-control" id = "username"  name="username" />
                        </div>
                        
                    </div> 
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Password:</label>
                        <div className="col-sm-4">
                            <input type="password" onChange={this.changePasswordHandler} className ="form-control" id = "password" name="password" />
                        </div>
                        
                    </div>
                    <button className = "btn btn-primary col-sm-6" type ="submit">Login</button>
        
                </form>
            </div>
        )
    }
}
export default withRouter(LogIn)