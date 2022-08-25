import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AdminNavbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/admin/salesmen-list" className="nav-link">Salesmen List</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/admin/add-salesman" className="nav-link">Add Salesman</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/admin/products-list" className="nav-link">Products List</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/admin/add-product" className="nav-link">Add Product</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/admin/upload-salesdata" className="nav-link">Upload Sales Data</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/admin/commissionList" className="nav-link">Commission Structure</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/admin/forced-calculation" className="nav-link">Forced Commission Calculation</Link>
                    </li>
                </ul>
            </div>
            <div className='collapse navbar-collapse justify-content-end'>
                <ul className='navbar-nav ml-auto'>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Log Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}