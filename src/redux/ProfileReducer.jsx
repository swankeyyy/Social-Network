let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            message: state.newPostText,
            counter: 0,
        };
        state.postArray.push(newPost);
        state.newPostText = ' ';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state
}

export let addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export let updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;