import React from 'react';
import { addPost } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';





const Profile = (props) => {

  
   
    
    return (
        <div>
            <ProfileInfo />
            <MyPosts postArray = {props.state.postArray}
            newPostText = {props.state.newPostText}
            addPost={props.addPost}/>
        </div>
    )
}

export default Profile