const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 39 },
        { id: 2, message: "It's my first post", likesCount: 14 },
      ],
      newPostText: "Helo",
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
      newMessagesText: "New message",
    },
    sitebar: {
      friendsName: [
        { img: 1, name: "Dimych" },
        { img: 2, name: "Andrey" },
        { img: 3, name: "Sveta" },
        { img: 3, name: "Alex" },
      ],
    },
  },
  _callSubscriber() {
    console.log("qwe");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POS") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessagesText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessagesText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessagesText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export let addPostActionCreator = () => {
  return { type: ADD_POST }
}

export let updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text }
}

export let addMessageActionCreator = () => {
  return { type: ADD_MESSAGE }
}

export let updateNewMessageTextActionCreator = (text) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export default store;
