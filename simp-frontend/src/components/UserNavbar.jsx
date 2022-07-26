import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserNavbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className=" text-center" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/user/allsales" className="nav-link">Overall Sales</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/user/sales" className="nav-link">My Sales</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/user/showgraph" className="nav-link">Show Graph</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}