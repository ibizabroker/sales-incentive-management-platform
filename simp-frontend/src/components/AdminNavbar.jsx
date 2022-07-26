import React, { Component } from 'react'

export default class AdminNavbar extends Component {
  render() {
    return (
        <nav className=" container navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse text-center" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link">Overall Sales</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link">My Sales</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link">Show Graph</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}