import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

let dialogsPage = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={addMessage} dialogsPage={dialogsPage} />
};

export default DialogsContainer;
