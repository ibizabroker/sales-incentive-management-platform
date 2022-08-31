import React, { Component } from 'react'
import AdminNavbar from './AdminNavbar'
import UserService from '../services/UserService'

export default class ForcedCommissionCalculation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId: null,
            userAmount : 0,
            transactionMonth: ""
        }
    
        this.handleUserIdChange = (event) => {
            this.setState({
                userId: event.target.value
            })
        }

        this.handleMonthChange = (event) => {
            this.setState({
                transactionMonth: event.target.value
            })
        }

        this.handleCommissionChange = (event) => {
            this.setState({
                userAmount: event.target.value
            })
        }

        this.saveCommisssion = (event) => {
            event.preventDefault();
            
            UserService.forcedCommission(this.state.userId, this.state.transactionMonth, this.state.userAmount)
            .then((res) => {
                console.log(res.data);
                alert(`Commission updated for user id: ${this.state.userId}`);
                // const userId = this.state.userId;
                // const userAmount = this.state.userAmount;
                // const month = this.state.month;
                // this.props.onSearchTermChange(userId, userAmount, month);
                // this.setState({
                //     userId: null,
                //     userAmount : 0,
                //     month: ""
                // });
            })
            .catch(err => console.log(err))            
        } 
    }

    render() {
        return (
            <div>
                <AdminNavbar />
                <div className = "container mt-4">
                    <div className = "row">
                        <div className = "card border-0 col-md-6 offset-md-3 offset-md-3 mt-2">
                            <h3 className="text-center mt-4">Forced Commission</h3>
                            <div className = "card-body">
                                <form autocomplete="off">

                                    <div className = "form-group row">
                                        <label className='col-sm-2 col-form-label'> User ID: </label>
                                        <div class="col-sm-10">
                                            <input type="number" placeholder='User ID' className ="form-control" id = "userId" name="userId" onChange={this.handleUserIdChange}/>
                                        </div>                                        
                                    </div>

                                    <div className = "form-group row mt-3">
                                        <label className='col-sm-2 col-form-label'> Month: </label>
                                        <div class="col-sm-10">
                                        <input type="month" className ="form-control" id = "transactionMonth" name="transactionMonth" onChange={this.handleMonthChange}/>
                                        </div>
                                    </div>

                                    <div className = "form-group row mt-3">
                                        <label className='col-sm-2 col-form-label'> Amount: </label>
                                        <div class="col-sm-10">
                                        <input type="number" placeholder='User Commission' className ="form-control" id = "userAmount" name="userAmount" onChange={this.handleCommissionChange}/>
                                        </div>
                                    </div>

                                    <div className='text-center'>
                                        <button className="btn btn-outline-dark col-sm-12 btn-info mt-3 addbutton" onClick={this.saveCommisssion}> Update </button>
                                    </div>                                   
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* </div>
                <div className="container col-sm-6 offset-md-4 mt-5 mb-2">
                <h2 className="primary text-center"> Forced Commission </h2>
                <form onSubmit={this.saveCommisssion}>

                    <div className="row mb-3 mt-4">
                        <label className="col-sm-2 col-form-label">User Id:</label>
                        <div className="col-sm-4">
                            <input type="number" className ="form-control" id = "userId"  name="userId" onChange={this.handleUserIdChange}/>
                        </div>     
                    </div> 

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Month:</label>
                        <div className="col-sm-4">
                            <input type="month" className ="form-control" id = "transactionMonth"  name="transactionMonth" onChange={this.handleMonthChange}/>
                        </div>                        
                    </div> 
                    
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Commisson:</label>
                        <div className="col-sm-4">
                            <input type="number" className ="form-control" id = "userAmount" name="userAmount" onChange={this.handleCommissionChange}/>
                        </div>                       
                    </div>
                    
                    <button className = "btn btn-primary col-sm-6" type='submit'>Update</button>
            
                </form>
                </div> */}
            </div>
        )
    }
}