import React from 'react'
import { v4 } from 'uuid';
import { useState } from 'react';
import "./Form.css";

const Form = (props) => {

  const [form, setForm] = useState({
        postTitle: "",
        subTitle: "",
        content: "",
        vote: 0,
        comments: [],
        id: ""
      })


return (
  <React.Fragment>
    <div className="formColumn">
    <form onSubmit={(e) => {
      e.preventDefault();
      const id = v4();
      props.handleNewPost({...form, id: id})
			}}>
				<div className="postTitle">
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
							} />
					</label>
				</div>
				<div className="subTitle">
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
							} />
					</label>
				</div>
				<div className="content">
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
							} />
					</label>
				</div>
				<div className='App'>
					<button type="submit">Post!</button>
				</div>
			</form>
		</div>
  </React.Fragment>
)
}

export default Form;