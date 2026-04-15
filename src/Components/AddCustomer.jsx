import React, { Component } from 'react'

class AddCustomer extends Component {

  initialState = {
    name: "",
    email: "",
    phone: ""
  };

  constructor(props) {
    super(props)
  
    this.state = this.initialState;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {

    const { sendData } = this.props;

    e.preventDefault();
    sendData(this.state);
    this.setState(this.initialState);
  }

  render() {

    return (
      <div className='bg-[#FFFFFF] rounded-2xl p-8 shadow-xl'>
        <h1 className='text-[#191C1D] text-2xl font-bold mb-2'>Add Customer</h1>
        <p className='text-[#5C5F60] text-sm mb-4'>Register a new lead into the workspace</p>

        {/* Add Customer Form */}
        <form action="" onSubmit={this.handleSubmit} className='space-y-5'>

          {/* Input Name */}
          <div>
            <label htmlFor="" className='text-sm mb-2 block'>Name</label>
            <input type="text" name='name' value={this.state.name} onChange={this.handleChange} placeholder='Full name' className='border rounded-xl border-[#E1E3E4] px-4 py-3 text-sm outline-none w-full'/>
          </div>

          {/* Input Email */}
          <div>
            <label htmlFor="" className='text-sm mb-2 block'>Email</label>
            <input type="text" name='email' value={this.state.email} onChange={this.handleChange} placeholder='email@company.com' className='border rounded-xl border-[#E1E3E4] px-4 py-3 text-sm outline-none w-full'/>
          </div>

          {/* Input Phone */}
          <div>
            <label htmlFor="" className='text-sm mb-2 block'>Phone</label>
            <input type="text" name='phone' value={this.state.phone} onChange={this.handleChange} placeholder='+1 (555) 000-0000' className='border rounded-xl border-[#E1E3E4] px-4 py-3 text-sm outline-none w-full'/>
          </div>

          {/* Add Button */}
          <button type='submit' className='w-full py-4 font-bold rounded-xl shadow-lg mt-4 bg-[#346EF6] hover:bg-[#DBE1FF] text-[#FFFFFF] hover:text-[#346EF6] cursor-pointer'>Add Customer</button>
        </form>
      </div>
    )
  }
}

export default AddCustomer