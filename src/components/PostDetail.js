import React from "react";
// import { useDispatch } from 'react-redux';
import { postsSelector } from '../app/postListSlice';
import { useSelector } from 'react-redux'

const PostDetail = () => {
  // const  dispatch = useDispatch();
  const posts = useSelector(postsSelector);

    return (
      <React.Fragment>
        <h2>{posts.selectedPost.postTitle}</h2>
        <h3>{posts.selectedPost.subTitle}</h3>
        <h4>{posts.selectedPost.content}</h4>
        <form>
          <label>
            <input type="text"/>
          </label>
        <button>Comment</button>
        </form>
      </React.Fragment>
    )
  }
  
  export default PostDetail;