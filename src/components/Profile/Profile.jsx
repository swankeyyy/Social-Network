import React from 'react';

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';





const Profile = (props) => {




    return (
        <div>
            <ProfileInfo />
            <MyPosts postArray={props.state.postArray}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch} />
        </div>
    )
}

export default Profile