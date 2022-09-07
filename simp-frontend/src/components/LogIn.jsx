import React, { Component, createRef } from 'react'
import UserService from '../services/UserService'
import { withRouter } from '../services/withRouter'

class LogIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            errMsg: ''
        }
        
        this.userRef = createRef();
        this.errRef = createRef();

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
            .catch ((err) => {
                if (err.response?.status === 401) {
                    this.setState({ errMsg: 'Check Username or Password' });
                }
                this.errRef.current.focus();
            })
    
        }
    }

    componentDidMount() {
        this.userRef.current.focus();
        this.setState({ errMsg: '' });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.username !== prevState.username || this.state.password !== prevState.password) {
            this.setState({ errMsg: '' });
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="row">
                    <div className="col-md-12 login-form">
                        <h3>Login</h3>
                        <p ref={this.errRef} className={this.state.errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{this.state.errMsg}</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-md-12 form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Username" 
                                    onChange={this.changeUsernameHandler} 
                                    ref={this.userRef}
                                    value={this.state.username}
                                />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-12 form-group">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    onChange={this.changePasswordHandler} 
                                    value={this.state.password}
                                />
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