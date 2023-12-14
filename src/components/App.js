import './App.css'
import Header from './Header'
import Feed from './Feed'
import Form from './Form'
import React from 'react'
import { useDispatch } from 'react-redux'
import { postsSelector } from '../app/postListSlice'
import { addPost, selectPost } from '../app/postListSlice';
import { useSelector } from 'react-redux'



function App() {
  const  dispatch = useDispatch();
  const posts = useSelector(postsSelector)

  const handlePostDisplay = (id) => {
    dispatch(selectPost({ id: id }));
    
  }

  const handleNewPost = (postInfo) => {
    dispatch(addPost({id: postInfo.id, form: postInfo}))
  }

  const upVote = (postId) => {
    
  }

  const downVote = (postId) => {

  }

  console.log(posts.postList)

  return (
    <React.Fragment>
      <Header />
      <Feed
      postList={posts.postList} 
      handlePostDisplay={handlePostDisplay}
      handleUpvoting={upVote}
      handleDownvoting={downVote} />
      <Form
      handleNewPost={handleNewPost} />
      <h3>{posts.selectedPost.postTitle}</h3>
      <h4>{posts.selectedPost.subTitle}</h4>
      <p>{posts.selectedPost.content}</p>
    </React.Fragment>
  )
}

export default App

