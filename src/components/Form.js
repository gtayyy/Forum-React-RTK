import React from 'react'
import { v4 } from 'uuid';

const Form = () => {

  const handleNewPostSubmission = (event) => {
    event.preventDefault();

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