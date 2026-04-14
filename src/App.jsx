import React, { Component } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'

class App extends Component {
  render() {
    return (
      <section className='w-full min-h-screen bg-[#f8f9fa] relative'>
        <Header />
        <Body />
      </section>
    )
  }
}

export default App