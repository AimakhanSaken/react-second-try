import {createStore} from 'redux';
import { combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialog-reducer ';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store


export default store;