import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 39 },
      { id: 2, message: "It's my first post", likesCount: 14 },
    ],
    newPostText: "Helo"
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Now is your it-kamasutra?" },
      { id: 3, message: "Yo" },
      { id: 3, message: "Yo" },
      { id: 3, message: "Yo" },
    ],
    newMessagesText: "New messages",
  },
  sitebar: {
    friendsName: [
      { img: 1, name: "Dimych" },
      { img: 2, name: "Andrey" },
      { img: 3, name: "Sveta" },
      { img: 3, name: "Alex" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree (state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree (state);
};

export let addMessage = () => {
  let newPost = {
    id: 5,
    message: state.dialogsPage.newMessagesText,
  };
  state.dialogsPage.messages.push(newPost);
  state.dialogsPage.newMessagesText = '';
  rerenderEntireTree (state);
};

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessagesText = newText;
  rerenderEntireTree (state);
};

export default state;
