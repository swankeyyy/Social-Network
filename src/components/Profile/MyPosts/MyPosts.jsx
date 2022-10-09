import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/ProfileReducer';

import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElement = props.postArray.map(post => <Post message={post.message} counter={post.counter} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div className={s.MypostsBlock}>
            <h4>My posts</h4>
            <div>
                <div><textarea className={s.textarea} onChange={onPostChange} ref={newPostElement} value={props.newPostText} /></div>
                <div> <button className = {s.buttons} onClick={addPost}>Добавить пост</button></div>
            </div>
            <div>{postElement}</div>


        </div>

    )
}

export default MyPosts