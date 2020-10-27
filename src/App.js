import React, { Component } from 'react'
import './App.css'
import SearchEvent from './SearchEvent'
import CardComponent from './CardComponent'
import Card from './Card'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SearchEvent />
        <CardComponent />
        <Card />
      </div>
    )
  }
}

export default App
