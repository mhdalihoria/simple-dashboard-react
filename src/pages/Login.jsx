import React, { useContext } from "react";
import { ContextObj } from "../Context";

export const Login = () => {
  const { user, setUser } = useContext(ContextObj);

  const changeHandler = (e) => {
    const { value, name } = e.target;

    setUser(prevUser => {
        return {
            ...prevUser, 
            [name]: value
        }
    })
  };

  const saveChanges = () => {
    //add user to local storage
    //redirect to home page
  }

  const deleteAccount = () => {
    //remove user from local storage
    //redirect to home page
  }

  return (
    <div className="login-container">
        <label htmlFor="usrName">Name</label>
      <input
        type="text"
        id="usrName"
        name="usrName"
        value={user.usrName}
        onChange={changeHandler}
        required
      />
        <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        name="age"
        value={user.age}
        onChange={changeHandler}
        required
      />
        <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={user.email}
        onChange={changeHandler}
        required
      />
        <label htmlFor="pwd">Enter Password</label>
      <input
        type="password"
        id="pwd"
        name="pwd"
        value={user.pwd}
        onChange={changeHandler}
        required
      />
        <label htmlFor="pwd2">Re-enter password</label>
      <input
        type="password"
        id="pwd2"
        name="pwd2"
        value={user.pwd2}
        onChange={changeHandler}
        required
      />
        <label htmlFor="img">Enter your Image Link</label>
      <input
        type="text"
        id="img"
        name="img"
        value={user.img}
        onChange={changeHandler}
        required
      />

      <button onClick={saveChanges}>Save</button>
      <button onClick={deleteAccount}>Delete Account</button>
    </div>
  );
};
