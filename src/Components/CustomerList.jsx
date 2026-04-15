import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class CustomerList extends Component {
  render() {

    const { data = [] } = this.props;

    return (
      <div className='w-full'>
        <h1 className='text-2xl font-bold mb-8'>Customer List</h1>

        {/* Customer Cards Container */}
        <div className='grid grid-flow-row grid-cols-2 gap-4'>

          {/* Card Container */}
          {
            data.map((item, index) => (
            <div key={index} className='bg-[#FFFFFF] rounded-2xl p-6 shadow-xl'>
              <div className='flex items-center justify-between mb-4'>
                <div className='bg-[#DBE1FF] text-[#346EF6] font-bold w-12 h-12 rounded-full flex items-center justify-center text-lg'>
                  {(item.name || "").split(" ").map(word => word[0]).join("")}
                  </div>
                <div className='bg-[#DBE1FF] text-[#6275AF] font-medium rounded-full px-2 py-0.5 flex items-center justify-center text-xs'>New Lead</div>
              </div>

              {/* Customer Info */}
              <div>
                <h3 className='text-lg font-bold mb-1 text-[#191C1D]'>{item.name}</h3>
                <div className='flex items-center justify-start mb-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <p className='text-sm ml-2 text-[#5C5F60]'>{item.email}</p>
                </div>
                <div className='flex items-center justify-start mb-6'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <p className='text-sm ml-2 text-[#5C5F60]'>{item.phone}</p>
                </div>
              </div>

              {/* Card Edit/Delete */}
              <div className='flex items-center justify-between border-t border-[#E1E3E4] pt-6 px-15'>
                <div className='flex items-center justify-start cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5 text-[#C9510D]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                  <button className='text-[#C9510D] text-xs font-bold ml-2 cursor-pointer'>Edit</button>
                </div>
                <div className='flex items-center justify-start cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5 text-[#581E00]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  <button className='text-[#581E00] text-xs font-bold ml-2 cursor-pointer'>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center'>
          <button className='bg-[#C5C7C8] text-[#191C1D] text-xs py-3 px-4 my-6 rounded-xl hover:bg-[#191C1D] hover:text-[#C5C7C8] cursor-pointer'>Load More Customers</button>
        </div>
      </div>
    )
  }
}

export default CustomerList