import React from "react";
import { Navigate } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  let messageElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} />
  ));

  let addMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageBody(text);
  };

  if (props.isAuth === false) return <Navigate to={"/login"} />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messageElements}
        <div>
          <textarea
            onChange={onMessageChange}
            value={props.dialogsPage.newMessagesText}
            placeholder="My message"
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
