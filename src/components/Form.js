import React from 'react'
import { v4 } from 'uuid';
import { useState } from 'react';

const Form = (props) => {

  const [form, setForm] = useState({
        postTitle: "",
        subTitle: "",
        content: "",
        vote: 0,
        id: ""
      })


return (
  <React.Fragment>
    <form onSubmit={(e) => {
      e.preventDefault();
      const id = v4();
      props.handleNewPost({...form, id: id})
    }}>
      <label>Post title:
        <input
          type="text"
          name="title" 
          onChange={e => {
            setForm({
              ...form,
              postTitle: e.target.value
            })
          }
          }/>
      </label>
      <label>Subtitle:
        <input
          type="text"
          name="subtitle" 
          onChange={e => {
            setForm({
              ...form,
              subTitle: e.target.value
            })
          }
          }/>
      </label>
      <label>Content:
        <input
          type='text'
          name="content" 
          onChange={e => {
            setForm({
              ...form,
              content: e.target.value
            })
          }
          }/>
      </label>
      <button type="submit">Create Post</button>
    </form>
  </React.Fragment>
)
}

export default Form;