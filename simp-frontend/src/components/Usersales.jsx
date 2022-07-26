import React, { Component } from 'react'

export default class Usersales extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    
  render() {
    return (
      <div className='container'><form>
      <label for="month">Select Month: </label>
      <input type="month" />
    </form></div>
    )
  }
}
