import Message from "./Message/Message";
import React from "react";
import classes from "./Dialogs.module.css";
import Users from "./DialogItem/DialogsItem";


const Dialogs = (props) => {
  
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <Users name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody; 

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
    
  };

  let addMessage = () => {
    props.sendMessage();
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
