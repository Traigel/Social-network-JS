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

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("qwe");
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessagesText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessagesText = "";
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessagesText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
