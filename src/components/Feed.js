import React from 'react'

const Feed = (props) => { 

    const posts = [];
    
    console.log(props.postList)
    for (const key in props.postList) {
        const post = props.postList[key]
        posts.push(
            <div onClick={() => props.handlePostDisplay(key)} key={key}>
                <h3>{post.postTitle}</h3>
                <h4>{post.subTitle}</h4>
                <hr/>
            </div>
            )
    }
    return (
    <React.Fragment>
        <div>
            {posts}
        </div>
    </React.Fragment>
    )
}

export default Feed;