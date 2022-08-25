import React, { Component } from 'react'
import UserService from '../services/UserService'
import { withRouter } from '../services/withRouter';
import AdminNavbar from './AdminNavbar'

class AddProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pName: '',
            pType: '',
            pCost: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }

    saveProduct = (e) => {
        e.preventDefault();
        let product = {pName: this.state.pName, pType: this.state.pType, pCost: this.state.pCost};
        console.log('product=> ' + JSON.stringify(product));

        UserService.addProduct(product).then(res =>{
            this.props.router.navigate('/admin/products-list');
        });
        
    }

    changeNameHandler= (event) => {
        this.setState({pName: event.target.value});
    }

    changeTypeHandler= (event) => {
        event.preventDefault();
        this.setState({pType: event.target.value});
    }

    changeCostHandler= (event) => {
        this.setState({pCost: event.target.value});
    }

    render() {
        return (
            <div>
            <AdminNavbar />
                <div className = "container mt-5">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3 mt-2">
                            <h3 className="text-center mt-4">Add Product</h3>
                            <div className = "card-body">
                                <form autocomplete="off">

                                    <div className = "form-group">
                                        <label> Name: </label>
                                        <input placeholder="Product Name" name="upperlimit" className="form-control mt-2" 
                                            value={this.state.pName} onChange={this.changeNameHandler}/>
                                    </div>

                                    <div className = "form-group mt-3">
                                        <label> Type: </label>
                                        <select className='form-control mt-2' value={this.state.pType} onChange={this.changeTypeHandler}>
                                            <option disabled={true} value={''}> Select an option </option>
                                            <option value={'2 Wheeler'}>2 Wheeler</option>
                                            <option value={'3 Wheeler'}>3 Wheeler</option>
                                            <option value={'4 Wheeler'}>4 Wheeler</option>
                                            <option value={'Commercial Vehicle'}>Commercial Vehicle</option>
                                        </select>
                                    </div>

                                    <div className = "form-group mt-3">
                                        <label> Cost: </label>
                                        <input type="number" placeholder="Product Cost" name="cost" className="form-control mt-2" 
                                            value={this.state.pCost} onChange={this.changeCostHandler}/>
                                    </div>

                                    <div className='text-center'>
                                        <button className="btn btn-outline-dark btn-info mt-3 addbutton" onClick={this.saveProduct}> Add </button>
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

export default withRouter(AddProduct);