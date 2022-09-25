const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: "Hihihihihi" },
        { id: 2, message: "dfewfsdfdfsdf f" },
        { id: 3, message: "34 24ewrew4" },
        { id: 4, message: "d few fewfef aewr a3 " },
        { id: 5, message: " sdf ewfewf ew fee" },
      ],
    dialogs: [
        { id: 1, name: "John" },
        { id: 2, name: "Sam" },
        { id: 3, name: "Leo" },
        { id: 4, name: "Nick" },
        { id: 5, name: "Max" },
        { id: 6, name: "Mona" },
        { id: 7, name: "Tomy" },
      ], 
    newMessageBody: ''   
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            stateCopy = {
                ...state,
                newMessageBody: action.body
            }; 
            return stateCopy;
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
            return stateCopy;
        }
        default:
            return state;    
    }

}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogsReducer;