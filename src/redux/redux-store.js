import {createStore} from 'redux';
import { combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialog-reducer ';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

window.store = store


export default store;