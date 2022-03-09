
import { UserReducer } from "./reducers/UserReducer";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';




const initialState= {
    userSignin: localStorage.getItem('UserInfo') ? {userInfo: JSON.parse(localStorage.getItem('userInfo'))} : null
};

const reducers = combineReducers({
    userSignin : UserReducer
});



const store =createStore(initialState, reducers, applyMiddleware(thunk));

export default store;