import dialogsReducer from "./dialog-reducer ";
import profileReducer from "./profile-reducer";



let store =  {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Hello World!", likeCounts:' 3 👍' },
                { id: 2, message: "It's my first post", likeCounts:' 10 👍' },
                { id: 3, message: "Blalal", likeCounts:' 0 👍' },
                { id: 4, message: "Tururuurrru", likeCounts:' 1 👍' },
                
              ],
            newPostText: 'Kkkk',  
                 
        },
        dialogsPage: {
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
        }, 
        sidebar: {
            friends: [
                { id: 1, name: "John" },
                { id: 2, name: "Sam" },
                { id: 3, name: "Leo" },
            ]
        } 
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    }, 

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscribe(this._state);

    }
    
}


export default store;

  