import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
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

export default compose(connect(mapStateYpProps, mapDispatchToProps),withAuthRedirectHoc)(Dialogs);

// let AuthRedirectComponentHoc = withAuthRedirectHoc(Dialogs);
// export default connect(mapStateYpProps, mapDispatchToProps)(AuthRedirectComponentHoc);


