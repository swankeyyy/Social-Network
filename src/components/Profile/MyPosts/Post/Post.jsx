import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511835_22.jpg" />
            <div>{props.message}</div>
            <span>{props.counter} likes</span>
            <span>DisLike</span>
        </div>
    )
}

export default Post