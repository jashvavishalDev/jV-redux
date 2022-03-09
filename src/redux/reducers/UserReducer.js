import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCESS, USER_SIGNIN_FAILURE, USER_SIGNUP_SUCESS, USER_SIGNUP_REQUEST, USER_SIGNUP_FAILURE} from "../../Constants";

export const UserReducer =(currentState ={loading: true, userInfo: {}}, action)=>{

    switch(action.type){
        case USER_SIGNIN_REQUEST: return {loading: true};
        case USER_SIGNIN_SUCESS: return {loading: false, userInfo: action.userInfo};
        case USER_SIGNIN_FAILURE: return {loading: false, error: action.error};
        case USER_SIGNUP_REQUEST: return {loading: false, error: action.error};
        case USER_SIGNUP_SUCESS: return {loading: false, error: action.error};
        case USER_SIGNUP_FAILURE: return {loading: false, error: action.error};
        default : return currentState;
    }

}