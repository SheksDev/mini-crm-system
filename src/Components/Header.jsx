import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className='border-b border-[#E1E3E4] px-12 py-6 flex items-center justify-between font-["Manrope"] bg-[#f8f9fa] fixed top-0 right-0 left-0 w-full'>
        <div>
          <h1 className='text-3xl font-extrabold text-[#191C1D]'>MiniCRM</h1>
        </div>
        <div className='flex items-center relative'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5 absolute left-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input type="text" placeholder='Search customers...' className='border-none bg-[#E1E3E4] w-full rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none'/>
        </div>
      </header>
    )
  }
}

export default Header