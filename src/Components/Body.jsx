import React, { Component } from 'react'
import AddCustomer from './AddCustomer';
import CustomerList from './CustomerList';

export class Body extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      formDataList: []
    };
  }

  updateData = (data) => {
    this.setState(
      (prevState) => {
        const updatedList = [...prevState.formDataList, data];

        // save to localStorage
        localStorage.setItem('crmData', JSON.stringify(updatedList));
        
        return { formDataList: updatedList };
      }
    );
  };

  // Load saved data
  componentDidMount() {
    const savedData = localStorage.getItem('crmData') || [];

    this.setState({
      formDataList: JSON.parse(savedData)
    })
  };

  // Delete an item
  handleDelete = (indexToDelete) => {
    this.setState((prevState) => {
      const updatedList = prevState.formDataList.filter(
        (_, index) => index !== indexToDelete
      );

      localStorage.setItem('crmData', JSON.stringify(updatedList));

      return { formDataList: updatedList };
    })
  };

  render() {
    return (
      <div className=' mt-21 p-6 grid grid-cols-[1fr_2fr] gap-8 font-["Inter"] items-start'>
        <AddCustomer sendData={this.updateData} />
        <CustomerList data={this.state.formDataList} deleteItem={this.handleDelete} />
      </div>
    )
  }
}

export default Body