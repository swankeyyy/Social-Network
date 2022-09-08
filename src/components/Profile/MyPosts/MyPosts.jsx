import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post counter = '15' message = 'Hi, how are u?' />
            <Post counter = '20' message = 'Its my first post' />
            
        </div>

    )
}

export default MyPosts