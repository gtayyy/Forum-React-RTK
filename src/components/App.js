import './App.css'
import Header from './Header'
import Feed from './Feed'
import Form from './Form'
import React from 'react'
import { useDispatch } from 'react-redux'
import { postsSelector } from '../app/postListSlice'
import { addPost, selectPost, sortList, upVote, downVote } from '../app/postListSlice';
import { useSelector } from 'react-redux'



function App() {
  const  dispatch = useDispatch();
  const posts = useSelector(postsSelector)

  const handlePostDisplay = (id) => {
    dispatch(selectPost({ id: id }));
    
  }

  const handleNewPost = (postInfo) => {
    dispatch(addPost({id: postInfo.id, form: postInfo}))
    dispatch(sortList({id: postInfo.id}));
  }

  const upVoting = (postId) => {
    dispatch(upVote({ id: postId }));
    dispatch(sortList({id: postId}));
  }

  const downVoting = (postId) => {
    dispatch(downVote({ id: postId }));
    dispatch(sortList({id: postId}));
  }

  console.log(posts.sortedList)

  return (
    <React.Fragment>
      <Header />
      <Feed
      postList={posts.sortedList} 
      handlePostDisplay={handlePostDisplay}
      handleUpvoting={upVoting}
      handleDownvoting={downVoting} />
      <Form
      handleNewPost={handleNewPost} />
      <h3>{posts.selectedPost.postTitle}</h3>
      <h4>{posts.selectedPost.subTitle}</h4>
      <p>{posts.selectedPost.content}</p>
    </React.Fragment>
  )
}

export default App

