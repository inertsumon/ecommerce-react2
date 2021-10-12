import React, { useState } from 'react';
import initializeAuth from '../../firebase/firebase.initialize';
import "./login.css";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom';
initializeAuth();
const provider = new GoogleAuthProvider();
const auth = getAuth();


const Login = () => {
  const [user, setUser] = useState({});
const  handleGoogleSignIn = () => {
  signInWithPopup(auth, provider)
  .then(result => {
    const { displayName, email, photoURL } = result.user;
    const loggenInUser = {
      name: displayName,
      email: email,
      photo: photoURL
    };
    setUser(loggenInUser);
  })
}
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      setUser({})
    })
  }
  let history = useHistory();

  function handleClick() {
    history.push("/shop");
  }
  
  return (
    
    <div className="login">
      {
        !user.name ? <div><span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input  className="loginInput" type="text" placeholder="Enter your email..." />
          <label>Password</label>
          <input  className="loginInput" type="password" placeholder="Enter your password..." />
        </form>
          <button onClick={handleGoogleSignIn} className="loginRegisterButton">Google Login</button>
        </div> :
          <button className="loginRegisterButton" onClick={handleSignOut}>SignOut</button>
        
      }
      
    <div>
        {
          user.email && <div>
            <h1>Login Successfull</h1>
            <img src={user.photo} alt=""/>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <button className="loginRegisterButton" type="button" onClick={handleClick}>
      Go home
    </button>
          </div>
          
        }
       
        
      </div>
  </div>
  );
};

export default Login;


