import React, { useContext, useEffect, useState } from "react";
import { ContextObj } from "../Context";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { user, setUser } = useContext(ContextObj);
  const [saveAccChanges, setSaveAccChanges] = useState(false);
  const [deleteAcc, setDeleteAcc] = useState(false);
  const [loginErrors, setLoginErrors] = useState({
    usrName: "",
    email: "",
    pwd: "",
    pwd2: "",
    imgLnk: "",
    age: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { value, name } = e.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const saveChanges = () => {
    //apply filteration logic
    // verifyCredientials()
    //add user to local storage
    setSaveAccChanges(true);
    //redirect to home page
    navigate("/");
  };

  const deleteAccount = () => {
    setDeleteAcc(true);
    navigate("/");
  };

  useEffect(() => {
    // if (saveAccChanges === true) {
        localStorage.setItem("user", JSON.stringify(user));
    // }
  }, [saveAccChanges]);

  useEffect(() => {
    // localStorage.removeItem("user")
    if (deleteAcc === true) {
      setUser({
        usrName: "",
        email: "",
        pwd: "",
        pwd2: "",
        imgLnk: "",
        age: "",
      });
        localStorage.setItem("user", JSON.stringify(user));
    }
  }, [deleteAcc]);

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
        minLength={8}
      />
      <label htmlFor="pwd2">Re-enter password</label>
      <input
        type="password"
        id="pwd2"
        name="pwd2"
        value={user.pwd2}
        onChange={changeHandler}
        required
        minLength={8}
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

// const verifyCredientials = () => {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//   // email verification

//   if (!regex.test(user.email)) {
//     setLoginErrors((prevLoginErrors) => {
//       return {
//         ...prevLoginErrors,
//         email: "This is not a valid email format!",
//       };
//     });
//   } else {
//     setLoginErrors((prevLoginErrors) => {
//       return {
//         ...prevLoginErrors,
//         email: "",
//       };
//     });
//   }

//   //Password verification
//   if (user.pwd.length < 8 ) {
//     setLoginErrors((prevLoginErrors) => {
//       return {
//         ...prevLoginErrors,
//         pwd: "Passwords must be at least 8 characters",
//       };
//     });
//   } else {
//     setLoginErrors((prevLoginErrors) => {
//       return {
//         ...prevLoginErrors,
//         pwd: "",
//       };
//     });
//   }

//   if (user.pwd !== user.pwd2) {
//     setLoginErrors((prevLoginErrors) => {
//       return {
//         ...prevLoginErrors,
//         pwd2: "Passwords Do Not Match",
//       };
//     });
//   } else {
//     setLoginErrors((prevLoginErrors) => {
//       return {
//         ...prevLoginErrors,
//         pwd2: "",
//       };
//     });
//   }

//   if (
//     user.pwd &&
//     user.email &&
//     user.age &&
//     user.pwd2&&
//     user.img&&
//     user.usrName
//   ) {
//     setSaveAccChanges(true);
//   }
// };
