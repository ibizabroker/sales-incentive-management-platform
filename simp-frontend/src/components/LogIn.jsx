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
            <div className="login-container">
                <div className="row">
                    <div className="col-md-12 login-form">
                        <h3>Login</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-md-12 form-group">
                                <input type="text" className="form-control" placeholder="Username" onChange={this.changeUsernameHandler} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-12 form-group">
                                <input type="password" className="form-control" placeholder="Password" onChange={this.changePasswordHandler} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="d-grid gap-2">
                                    <button className='btn btn-primary' type='submit'>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(LogIn)