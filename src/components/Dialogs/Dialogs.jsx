import Message from "./Message/Message";
import React from "react";
import classes from "./Dialogs.module.css";
import Users from "./DialogItem/DialogsItem";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialog-reducer ";

const Dialogs = (props) => {
  
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <Users name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody; 

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))  
  };

  let addMessage = () => {
    props.store.dispatch(sendMessageCreator())
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.usersItems}>{dialogsElements}</div>
        <div className={classes.chats}>{messagesElements}</div>
      </div>
      <div className={classes.sendText}>
      <textarea
          className={classes.messageTextarea}
          value={newMessageBody}
          onChange={onNewMessageChange}
        ></textarea>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
