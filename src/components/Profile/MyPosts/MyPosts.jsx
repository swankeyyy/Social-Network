import React from 'react';

import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElement = props.postArray.map(post => <Post message={post.message} counter={post.counter} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {
            type: 'UPDATE-NEW-POST-TEXT', newText: text
        };
        props.dispatch(action);
    }


    return (
        <div className={s.MypostsBlock}>
            <h4>My posts</h4>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /></div>
                <div> <button onClick={addPost}>Добавить пост</button></div>
            </div>
            <div>{postElement}</div>


        </div>

    )
}

export default MyPosts