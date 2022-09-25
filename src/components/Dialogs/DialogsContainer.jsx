
import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialog-reducer ";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = () => {
//   // let state = store.getState().dialogsPage;
        
//   return (
//     <storeContext.Consumer>
//       { (store) => {
//         let onNewMessageChange = (body) => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         };

//         let addMessage = () => {
//           store.dispatch(sendMessageCreator());
//         };
//         return <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={addMessage}
//             dialogsPage={store.getState().dialogsPage}
//           />
//         }
//       }
//     </storeContext.Consumer>
//   );
// };

let mapStateToProps= (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps= (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));

    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
