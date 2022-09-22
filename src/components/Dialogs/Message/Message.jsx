
import classes from "./../Dialogs.module.css";
import React from 'react';


const Message = (props) => {
  return <div className={classes.chat}>{props.message}</div>
  
};


export default Message;


