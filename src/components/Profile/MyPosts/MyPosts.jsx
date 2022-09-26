import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElement = props.postArray.map(post => <Post message = {post.message} counter = {post.counter} />)
    
    return (
        <div className={s.MypostsBlock}>
            <h4>My posts</h4>
            <div>
                <div><textarea></textarea></div>
                <div> <button>Add Post</button></div>
            </div>
            <div>{postElement}</div>
           

        </div>

    )
}

export default MyPosts