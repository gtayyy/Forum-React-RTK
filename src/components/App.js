import './App.css'
import Header from './Header'
import Feed from './Feed'
import Form from './Form'
import React from 'react'
import { useDispatch } from 'react-redux'
import { postsSelector } from '../app/postListSlice'
import { addPost, selectPost, sortList, upVote, downVote, deletePost } from '../app/postListSlice';
import {pageViewSelector } from '../app/pageViewSlice'
import { changePage } from '../app/pageViewSlice'
import { useSelector } from 'react-redux'



function App() {
  const  dispatch = useDispatch();
  const posts = useSelector(postsSelector);
  const view = useSelector(pageViewSelector);
  const pageViews = {
    popular: 1,
    oldest: 2
  };

  const handlePostDisplay = (id) => {
    dispatch(selectPost({ id: id }));
    
  }

  const handleNewPost = (postInfo) => {
    dispatch(addPost({id: postInfo.id, form: postInfo}))
    dispatch(sortList());
  }

  const upVoting = (postId) => {
    dispatch(upVote({ id: postId }));
    dispatch(sortList());
  }

  const downVoting = (postId) => {
    dispatch(downVote({ id: postId }));
    dispatch(sortList());
  }

  const deleteAPost = (postId) => {
    dispatch(deletePost({ id: postId }))
    dispatch(sortList());
  }

  console.log(posts.postList)
  console.log(posts.sortedList)


  let currentView;

  if (view.page === pageViews.popular) {

    currentView = 
      <Feed
      postList={posts.sortedList} 
      handlePostDisplay={handlePostDisplay}
      handleUpvoting={upVoting}
      handleDownvoting={downVoting}
      handleDelete={deleteAPost} />

  } else if (view.page === pageViews.oldest) {

    currentView = 
    <Feed
      postList={posts.postList} 
      handlePostDisplay={handlePostDisplay}
      handleUpvoting={upVoting}
      handleDownvoting={downVoting}
      handleDelete={deleteAPost} />
  }

  return (
    <React.Fragment>
			<Header />
			<div className='App'>
			<h3>Sort by: </h3>
      <button onClick={() => dispatch(changePage({ view: pageViews.popular}))}>Popular</button>
      <button onClick={() => dispatch(changePage({ view: pageViews.oldest}))}>Oldest</button>
			</div>

			{currentView}

      <Form
      handleNewPost={handleNewPost} />
      <h3>{posts.selectedPost.postTitle}</h3>
      <h4>{posts.selectedPost.subTitle}</h4>
      <p>{posts.selectedPost.content}</p>
      </React.Fragment>
  )
}

export default App

