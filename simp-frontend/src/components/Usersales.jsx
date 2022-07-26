import React, { Component } from 'react'
import UserNavbar from './UserNavbar'

export default class Usersales extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    
  render() {
    return (
      <div>
        <UserNavbar />
        <div className='container'>
          <form>
            <label for="month">Select Month: </label>
            <input type="month" />
          </form>
        </div>
      </div>
      
    )
  }
}
