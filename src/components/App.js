import './App.css'
import Header from './Header'
import Feed from './Feed'
import React from 'react'

function App() {

  const handlePostDisplay = (id) => {

  }

  return (
    <React.Fragment>
      <Header />
      <Feed
      handlePostDisplay={handlePostDisplay} />
    </React.Fragment>
  )
}

export default App

