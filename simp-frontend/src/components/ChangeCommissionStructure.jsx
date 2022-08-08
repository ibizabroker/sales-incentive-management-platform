import React, { Component } from 'react'
import UserService from '../services/UserService';
import AdminNavbar from './AdminNavbar'

export default class ChangeCommissionStructure extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null,
      commissionId:'',
    //   productTypeId:'',
      startRange:'',
      endRange:'',
      commissionPercentage:''
    }
    this.changeStartRangeHandler = this.changeStartRangeHandler.bind(this);
    this.changeEndRangeHandler = this.changeEndRangeHandler.bind(this);
    this.changeCommissionPercentageHandler = this.changeCommissionPercentageHandler.bind(this);
    this.updateCommissionStructure = this.updateCommissionStructure.bind(this);
  }
  componentDidMount(){
    UserService.getCommissionStructure(this.state.selected).then( (res) =>{
        let commission = res.data;
        this.setState({startRange:commission.startRange,
            endRange:commission.endRange,
            commissionPercentage:commission.commissionPercentage
        });
    });
}
updateCommissionStructure = (e) => {
    e.preventDefault();
    
    let commission = {startRange: this.state.startRange, endRange: this.state.endRange, emailId: this.state.commissionPercentage};
    console.log('commission => ' + JSON.stringify(commission));
    console.log('id => ' + JSON.stringify(this.state.selected));
    UserService.changeCommissionStructure(commission,1).then( res => {
      //  this.props.history.push('/admin/change-commission');
    });
}
changeStartRangeHandler= (event) => {
    this.setState({startRange: event.target.value});
}

changeEndRangeHandler= (event) => {
    this.setState({endRange: event.target.value});
}

changeCommissionPercentageHandler= (event) => {
    this.setState({commissionPercentage: event.target.value});
}
  onChange = e => {
    this.setState({ selected : parseInt(e.target.value) });
  }

  render() {
    return (
      <div>
        <AdminNavbar />
        <div className='container text-center mt-4'>
          <h2>Select the commission structure you want to change from the below dropdown.</h2>
          <form>
              <select className='form-control' onChange={this.onChange}>
                  <option value="" selected="selected"></option>
                  <option value="1">2 Wheeler Start Range</option>
                  <option value="2">2 Wheeler Mid Range</option>
                  <option value="3">2 Wheeler End Range</option>
                  <option value="4">3 Wheeler Start Range</option>
                  <option value="5">3 Wheeler End Range</option>
                  <option value="6">4 Wheeler Start Range</option>
                  <option value="7">4 Wheeler Mid Range</option>
                  <option value="8">4 Wheeler End Range</option>
                  <option value="9">Commercial Vehicle Start Range</option>
                  <option value="10">Commercial Vehicle End Range</option>
              </select>
          </form>
        </div>
        {
          this.state.selected === 1 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 2 Wheeler Commission Structure Start Range </h2>
            <form>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Upper Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" value={this.state.endRange} onChange={this.changeEndRangeHandler} className ="form-control" id = "highCost"  name="highCost" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Lower Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" value={this.state.startRange} onChange={this.changeStartRangeHandler} className ="form-control" id = "lowCost" name="lowCost" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Commission Percentage:</label>
                    <div className="col-sm-4">
                        <input type="number" value={this.state.commissionPercentage} onChange={this.changeCommissionPercentageHandler} className ="form-control" id = "p1" name="p1" />
                    </div>
                </div>

                <button className = "btn btn-primary col-sm-12" onClick={this.updateCommissionStructure}>Change Structure</button>
      
            </form>
            </div>
          ) : this.state.selected === 2 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 2 Wheeler Commission Structure Mid Range </h2>
            <form>

<div className="row mb-3">
    <label className="col-sm-8 col-form-label">Upper Limit Cost:</label>
    <div className="col-sm-4">
        <input type="number" value={this.state.endRange} onChange={this.changeEndRangeHandler} className ="form-control" id = "highCost"  name="highCost" />
    </div>      
</div> 

<div className="row mb-3">
    <label className="col-sm-8 col-form-label">Lower Limit Cost:</label>
    <div className="col-sm-4">
        <input type="number" value={this.state.startRange} onChange={this.changeStartRangeHandler} className ="form-control" id = "lowCost" name="lowCost" />
    </div>
</div>

<div className="row mb-3">
    <label className="col-sm-8 col-form-label">Commission Percentage:</label>
    <div className="col-sm-4">
        <input type="number" value={this.state.commissionPercentage} onChange={this.changeCommissionPercentageHandler} className ="form-control" id = "p1" name="p1" />
    </div>
</div>

<button className = "btn btn-primary col-sm-12" onClick={this.updateCommissionStructure}>Change Structure</button>

</form>
            </div>
          ) : this.state.selected === 3 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 2 Wheeler Commission Structure End Range </h2>
            <form>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Upper Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "highCost"  name="highCost" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Lower Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "lowCost" name="lowCost" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Commission Percentage:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p1" name="p1" />
                    </div>
                </div>

                

                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          ) : this.state.selected === 4 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 3 Wheeler Commission Structure Start Range </h2>
            <form>

            <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Upper Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "highCost"  name="highCost" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Lower Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "lowCost" name="lowCost" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Commission Percentage:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p1" name="p1" />
                    </div>
                </div>

                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          ) : this.state.selected === 5 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 3 Wheeler Commission Structure End Range </h2>
            <form>
            <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Upper Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "highCost"  name="highCost" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Lower Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "lowCost" name="lowCost" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Commission Percentage:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p1" name="p1" />
                    </div>
                </div>
               
                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          ) : this.state.selected === 6 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 4 Wheeler Commission Structure Start Range </h2>
            <form>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Upper Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "highCost"  name="highCost" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Lower Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "lowCost" name="lowCost" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Commission Percentage:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p1" name="p1" />
                    </div>
                </div>

                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          )  : this.state.selected === 7 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 4 Wheeler Commission Structure Mid Range </h2>
            <form>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Upper Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "highCost"  name="highCost" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Lower Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "lowCost" name="lowCost" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Commission Percentage:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p3" name="p3" />
                    </div>
                </div>

                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          ) : this.state.selected === 8 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 4 Wheeler Commission Structure End Range </h2>
            <form>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Upper Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "highCost"  name="highCost" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Lower Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "lowCost" name="lowCost" />
                    </div>
                </div>

             

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Commission Percentage:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p3" name="p3" />
                    </div>
                </div>

                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          ) : this.state.selected === 9 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> Commercial Vehicle Commission Structure Start Range </h2>
            <form>

            <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Upper Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "highCost"  name="highCost" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Lower Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "lowCost" name="lowCost" />
                    </div>
                </div>

             

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Commission Percentage:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p3" name="p3" />
                    </div>
                </div>

                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          ) : this.state.selected === 10 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> Commercial Vehicle Commission Structure End Range </h2>
            <form>

              
            <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Upper Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "highCost"  name="highCost" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Lower Limit Cost:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "lowCost" name="lowCost" />
                    </div>
                </div>

             

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Commission Percentage:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p3" name="p3" />
                    </div>
                </div>

                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          ) : null
        }
      </div>
    );
  }
}