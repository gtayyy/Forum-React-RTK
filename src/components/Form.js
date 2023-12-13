import React from 'react'
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addPost } from '../app/postListSlice';
import { useState } from 'react';

const Form = () => {

    const [form, setForm] = useState( {
        postTitle: "",
        subTitle: "",
        content: "",
        id: ""
      })

    const dispatch = useDispatch()

  const handleNewPostSubmission = (event) => {
    event.preventDefault();

    
    const id = v4()
    setForm({...form, id})

    dispatch(addPost(form.id, form));
  }


return (
  <React.Fragment>
    <form onSubmit={handleNewPostSubmission}>
      <label>Post title:
        <input
          type="text"
          name="title" />
      </label>
      <label>Subtitle:
        <input
          type="text"
          name="subtitle" />
      </label>
      <label>Content:
        <input
          type='text'
          name="content" />
      </label>
      <button type="submit">Create Post</button>
    </form>
  </React.Fragment>
)
}

export default Form;