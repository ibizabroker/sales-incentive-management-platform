import React, { Component } from 'react'
import UserService from '../services/UserService';
import { withRouter } from '../services/withRouter';


class UpdateCommissionStructure extends Component {
  
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
          
            commissionId: this.props.router.params.commissionId,
            //commissionId:1,
            startRange: '',
            endRange: '',
            commissionPercentage: ''
        }
        //console.log(this.commissionId);
        this.changestartRangeHandler = this.changestartRangeHandler.bind(this);
        this.changeendRangeHandler = this.changeendRangeHandler.bind(this);
        this.changeCommissionPercentageHandler=this.changeCommissionPercentageHandler.bind(this);
        this.updateCommissionStructure= this.updateCommissionStructure.bind(this);
    }
    
    updateCommissionStructure = (e) => {
        e.preventDefault();
        let commission = {startRange: this.state.startRange, endRange: this.state.endRange, commissionPercentage: this.state.commissionPercentage};
        console.log('commission => ' + JSON.stringify(commission));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.changeCommissionStructure(commission, this.state.commissionId).then( res => {
            this.props.router.navigate('/admin/commissionList');
        });
    }
    componentDidMount(){
        UserService.getCommissionStructure(this.state.commissionId).then( (res) =>{
            let commission = res.data;
            this.setState({startRange: commission.startRange,
                endRange: commission.endRange,
                commissionPercentage:commission.commissionPercentage
            });
        });
    }

    changestartRangeHandler= (event) => {
        this.setState({startRange: event.target.value});
    }

    changeendRangeHandler= (event) => {
        this.setState({startRange: event.target.value});
    }

    changeCommissionPercentageHandler= (event) => {
        this.setState({commissionPercentage: event.target.value});
    }

    render() {
    return (
        <div>
           <div className = "container mt-5">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3 mt-2 bg-dark">
                        <h3 className="text-center mt-4 head">Update Commission Structure</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Upper Limit: </label>
                                    <input placeholder="Upper Limit" name="upperlimit" className="form-control mt-2" 
                                        value={this.state.endRange} onChange={this.changeendRangeHandler}/>
                                </div>
                                <div className = "form-group mt-3">
                                    <label> Lower Limit: </label>
                                    <input placeholder="Lower Limit" name="lowerlimit" className="form-control mt-2" 
                                        value={this.state.startRange} onChange={this.changestartRangeHandler}/>
                                </div>
                                <div className = "form-group mt-3">
                                    <label> Commsission Percentage: </label>
                                    <input placeholder="Commission Percentage" name="commissionPercentage" className="form-control mt-2" 
                                        value={this.state.commissionPercentage} onChange={this.changeCommissionPercentageHandler}/>
                                </div>

                                <button className="btn btn-success mt-3" onClick={this.updateCommissionStructure}>Save</button>
                                
                            </form>
                        </div>
                    </div>
                </div>

           </div>
    </div>

    )
  }
}
export default withRouter(UpdateCommissionStructure)