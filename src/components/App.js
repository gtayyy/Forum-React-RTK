import './App.css'
import Header from './Header'
import Feed from './Feed'
import React from 'react'
import { useDispatch } from 'react-redux'
import { selectPost } from '../app/selectedPostSlice'

function App() {
  const  dispatch = useDispatch();

  const handlePostDisplay = (id) => {
    dispatch(selectPost({ id }));
    
  }

  return (
    <React.Fragment>
      <Header />
      <Feed 
      handlePostDisplay={handlePostDisplay}/>
    </React.Fragment>
  )
}

export default App

