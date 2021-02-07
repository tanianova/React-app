let rerenderEntireTree = () => {
    console.log('state was changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi, how are you', likesCount: 15},
            {id: 2, message: 'its my first project', likesCount: 5}
        ],
        newPostText: 'hi',

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'how are you?'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'}
        ],
        dialogs: [
            {id: 1, name: 'user1'},
            {id: 2, name: 'user2'},
            {id: 3, name: 'user3'},
            {id: 4, name: 'user4'},
            {id: 5, name: 'user5'},
        ],
        newDialog: {
            user: 'user1',
            message: 'hi'
        }
    },
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);

}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export const addMessage = () => {
    let newMessage = {
        id: 1,
        message: state.dialogsPage.newDialog.message
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newDialog.message = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newDialog.message = newMessage;
    rerenderEntireTree(state);
}

export default state;
