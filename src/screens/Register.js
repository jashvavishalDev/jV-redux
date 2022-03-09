import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { UserActions } from '../redux/actions/UserActions';

import useHistory from 'react-dom';

function Register(props) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userSignin =useSelector(state => state.userSignin);
  const dispatch = useDispatch();
  // const history= useHistory(); 

  const registerUser=(event)=>{
     event.preventDefault();
     console.log(email, password);
     dispatch(UserActions({firstName, lastName, mobile, email, password}));
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
        {userSignin && userSignin.loading ? (
          <div>
            <h1> Loading Symbol</h1>
          </div>

        ) :

        (
          <div className="col-md-6">
          <div className="card">
            <form onSubmit={(event)=>registerUser(event)} className="box">
              <h1>Login</h1>
              <p className="text-muted"> Please enter your login and password!</p>
              <input type="text" name="fname" onChange={(e)=>setFirstName(e.target.value)} placeholder="FirstName" />
              <input type="text" name="lname" onChange={(e)=>setLastName(e.target.value)} placeholder="LastName" />
              <input type="text" name="mobile" onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile" />
              <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
              <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
              
              <input type="submit" name="login" value="Login"  />
             
            </form>
          </div>
        </div>
     
    
        )
        }
         </div>
        </div>
        
  )
}

export default Register;