import './App.css'
import Header from './Header'
import Feed from './Feed'
import Form from './Form'
import React from 'react'
import { useDispatch } from 'react-redux'
import { selectPost } from '../app/selectedPostSlice'
import { postListSelector } from '../app/postListSlice'
import { addPost } from '../app/postListSlice';
import { useSelector } from 'react-redux'



function App() {
  const  dispatch = useDispatch();
  const postList = useSelector(postListSelector)

  const handlePostDisplay = (id) => {
    dispatch(selectPost({ postId: id }));
    
  }

  const handleNewPost = (postInfo) => {
    dispatch(addPost({id: postInfo.id, form: postInfo}))
  }

  return (
    <React.Fragment>
      <Header />
      <Feed
      postList={postList} 
      handlePostDisplay={handlePostDisplay}/>
      <Form
      handleNewPost={handleNewPost} />
    </React.Fragment>
  )
}

export default App

