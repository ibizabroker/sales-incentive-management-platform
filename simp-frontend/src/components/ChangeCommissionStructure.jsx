import React, { Component } from 'react'
import AdminNavbar from './AdminNavbar'

export default class ChangeCommissionStructure extends Component {
  constructor(){
    super();
    this.state = {
      selected: null
    }
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
                  <option value="1">2 Wheeler</option>
                  <option value="2">3 Wheeler</option>
                  <option value="3">4 Wheeler</option>
                  <option value="4">Commercial Vehicle</option>
              </select>
          </form>
        </div>
        {
          this.state.selected === 1 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 2 Wheeler Commission Structure </h2>
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
                    <label className="col-sm-8 col-form-label">Percentage when cost is above upper limit:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p1" name="p1" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Percentage when cost is inbetween the limits:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p2" name="p2" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Percentage when cost is below the lower limit:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p3" name="p3" />
                    </div>
                </div>

                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          ) : this.state.selected === 2 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 3 Wheeler Commission Structure </h2>
            <form>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Cost Limit:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "costLimit"  name="costLimit" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Percentage when cost is above limit:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p1" name="p1" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Percentage when cost is below limit:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p2" name="p2" />
                    </div>
                </div>

                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          ) : this.state.selected === 3 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center"> 4 Wheeler Commission Structure </h2>
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
                    <label className="col-sm-8 col-form-label">Percentage when cost is above upper limit:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p1" name="p1" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Percentage when cost is inbetween the limits:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p2" name="p2" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Percentage when cost is below the lower limit:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p3" name="p3" />
                    </div>
                </div>

                <button className = "btn btn-primary col-sm-12" type ="submit">Change Structure</button>
      
            </form>
            </div>
          ) : this.state.selected === 4 ? (
            <div className="container col-sm-4 offset-md-4 mt-5 mb-2">
            <h2 className="primary text-center">Commercial Vehicle Commission Structure </h2>
            <form>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Cost Limit:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "costLimit"  name="costLimit" />
                    </div>      
                </div> 

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Percentage when cost is above limit:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p1" name="p1" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-8 col-form-label">Percentage when cost is below limit:</label>
                    <div className="col-sm-4">
                        <input type="number" className ="form-control" id = "p2" name="p2" />
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