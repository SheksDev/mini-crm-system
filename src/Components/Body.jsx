import React, { Component } from 'react'
import AddCustomer from './AddCustomer';
import CustomerList from './CustomerList';

export class Body extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      formData: {}
    };
  }

  updateData = (data) => {
    this.setState({ formData: data }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div className=' mt-21 p-6 grid grid-cols-[1fr_2fr] gap-8 font-["Inter"] items-start'>
        <AddCustomer sendData={this.updateData} />
        <CustomerList />
      </div>
    )
  }
}

export default Body