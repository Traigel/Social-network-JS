import React from "react";
import { connect } from "react-redux";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";

let mapStateYpProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
};

const DialogsContainer = connect(mapStateYpProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
