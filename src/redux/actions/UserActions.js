// import React from "react";
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCESS, USER_SIGNIN_FAILURE, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCESS } from "../../Constants";
import axiosInstance from '../../Api';

export const UserActions = (reqbody) => async (dispatch) => {

  dispatch(
        {
            type: USER_SIGNIN_REQUEST,
           
        }
    );
    try {
        const { data } = await axiosInstance.post('auth/login', reqbody);
        localStorage.setItem('UserInfo', JSON.stringify(data.data));
        dispatch({
            type: USER_SIGNIN_SUCESS,
            userInfo: data.data,
           
        });

    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAILURE,
            error,
            
        });
    }


}


export const UserRegister = (reqbody) => async (dispatch) => {

    dispatch(
          {
              type: USER_SIGNUP_REQUEST,
             
          }
      );
      try {
          const { data } = await axiosInstance.post('auth/login', reqbody);
          localStorage.setItem('UserInfo', JSON.stringify(data.data));
          dispatch({
              type: USER_SIGNUP_SUCESS,
              userInfo: data.data,
             
          });
  
      } catch (error) {
          dispatch({
              type: USER_SIGNUP_FAILURE,
              error,
              
          });
      }
  
  
  }