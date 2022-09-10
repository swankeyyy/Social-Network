import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className = {s.MypostsBlock}>
            <h4>My posts</h4>
            <div>
                <div><textarea></textarea></div>
               <div> <button>Add Post</button></div>
            </div>
            <Post counter = '15' message = 'Hi, how are u?' />
            <Post counter = '20' message = 'Its my first post' />
            
        </div>

    )
}

export default MyPosts