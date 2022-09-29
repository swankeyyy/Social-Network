import rerenderEntireTree from './../render'


let state = {
    friendslist: {
        friends: [
            {name: 'Veronika',
        id: 1},
            {name: 'Nikita',
        id: 2},
            {name: 'Artemka',
        id: 3},
            {name: 'Nastya',
        id: 4}
            
        ]
    },
    messagesPage: {
        messageArray: [
            {
                text: 'hi',
                id: 1,
                name: 'Vasya'
            },
            {
                text: 'da ladno?',
                id: 2,
                name: 'Petka'
            },
            {
                text: 'kak tam gagri?',
                id: 3,
                name: 'Boris'
            },
            {
                text: 'i got ps4',
                id: 3,
                name: 'Maximka'
            },
            {
                text: 'i want to drink',
                id: 4,
                name: 'Anton'
            },
        ],
    },

    profilePage: {
        postArray: [
            {
                message: 'Hello Kitty',
                counter: '10'
            },
            {
                message: 'Da ny nax',
                counter: '22'
            },
            {
                message: 'davaika ya popadasdarobyu',
                counter: '33'
            },
        ],
        newPostText: 'new app'
    }
}

export let addPost = (postMessage) => {
  
    let newPost ={
        message: postMessage,
        counter: 0,
    
    }
    state.profilePage.postArray.push(newPost);
    rerenderEntireTree(state)
    };
export default state;