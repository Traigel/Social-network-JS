import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} /> );
let messageElements = props.messages.map((message) => <Message message={message.message} />  );

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
      {dialogsElements}
      </div>
      <div className={classes.messages}>
      {messageElements}
      </div>
    </div>
  );
};

export default Dialogs;
