import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

let dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Valera" },
];

let dialogsElements = dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} /> );

let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Now is your it-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 3, message: "Yo" },
    { id: 3, message: "Yo" },
  ];

  let messageElements = messages.map((message) => <Message message={message.message} />  );

const Dialogs = (props) => {
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
