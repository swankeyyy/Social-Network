import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    
    return (
        <div className={s.MypostsBlock}>
            <h4>My posts</h4>
            <div>
                <div><textarea></textarea></div>
                <div> <button>Add Post</button></div>
            </div>
            <div><Post /></div>
           

        </div>

    )
}

export default MyPosts