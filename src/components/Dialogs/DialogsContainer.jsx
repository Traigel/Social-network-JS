import React from "react";
import { connect } from "react-redux";
import { withAuthRedirectHoc } from "../../hoc/withAuthRedirect";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";

let mapStateYpProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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

let AuthRedirectComponentHoc = withAuthRedirectHoc(Dialogs);

const DialogsContainer = connect(mapStateYpProps, mapDispatchToProps)(AuthRedirectComponentHoc);

export default DialogsContainer;
