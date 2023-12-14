import React from 'react'

const Feed = (props) => { 

    const posts = props.postList.map((post) => {
        return (
            <div onClick={() => props.handlePostDisplay(post.id)} key={post.id}>
                <h3>{post.postTitle}</h3>
                <h4>{post.subTitle}</h4>
                <h4>Sum of Votes: {post.vote}</h4>
                <button onClick={props.handleUpvoting(post.id)}>Upvote</button>
                <button onClick={()=>props.handleDownvoting(post.id)}>Downvote</button>
                <hr/>
            </div>
    )
        })
    return (
    <React.Fragment>
        <div>
            {posts}
        </div>
    </React.Fragment>
    )
}

export default Feed;