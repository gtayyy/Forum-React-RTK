import Form from './Form'
import PostDetail from './PostDetail'
import React from 'react'

const Feed = (props) => {
    const posts = props.postList.map((post) => {
        return(
            <div onClick={() => props.handlePostDisplay(post.id)}>
                <h3>{post.postTitle}</h3>
                <h4>{post.subTitle}</h4>
                <hr/>
            </div>

        )
    })
    return (
        <React.Fragment>
        <Form/>
        <div>
            {posts}
        </div>
    </React.Fragment>
    )
}

export default Feed;