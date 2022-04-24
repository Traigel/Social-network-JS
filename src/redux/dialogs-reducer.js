const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
  ],
  newMessagesText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessagesText,
      };
      state.messages.push(newMessage);
      state.newMessagesText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessagesText = action.newText;
      return state;
    default:
      return state;
  }
};

export let addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export let updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default dialogsReducer;
