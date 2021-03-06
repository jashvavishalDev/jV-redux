import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { UserActions } from '../redux/actions/UserActions';

import useHistory from 'react-dom';
import { NavLink } from 'react-router-dom';

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userSignin =useSelector(state => state);
  const dispatch = useDispatch();
  const history= useHistory();

  const loginUser=(event)=>{
     event.preventDefault();
     console.log(email, password);
     dispatch(UserActions({email: email, password: password}));
  }
  useEffect(()=>{
      console.log(userSignin);
      if(userSignin && userSignin.userInfo){
        props.history.push('/home');
      }
  }, [userSignin]);

  return (

    <div className="container">
      <div className="row">
      
          <div className="col-md-6">
          <div className="card">
            <form onSubmit={(event)=>loginUser(event)} className="box">
              <h1>Login</h1>
              <p className="text-muted"> Please enter your login and password!</p>
              <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
              <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
              <NavLink> <a className="forgot text-muted" >Forgot password?</a></NavLink>
              <NavLink> <a className="forgot text-muted" >Register</a> </NavLink>
              <input type="submit" name="login" value="Login"  />
             
            </form>
          </div>
        </div>
        </div>
        </div>
    
        
        
        
        
  )
}

export default LoginScreen;