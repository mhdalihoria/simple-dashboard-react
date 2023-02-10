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

  const verifyCredientials = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexAge = /^[0-9]{2}$/i;
    // email verification
    if (!regexEmail.test(user.email)) {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          email: "This is not a valid email format!",
        };
      });
    } else {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          email: "",
        };
      });
    }

    //Password verification
    if (user.pwd.length < 8) {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          pwd: "Passwords must be at least 8 characters",
        };
      });
    } else {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          pwd: "",
        };
      });
    }

    // password matching?
    if (user.pwd !== user.pwd2) {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          pwd2: "Passwords Do Not Match",
        };
      });
    } else {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          pwd2: "",
        };
      });
    }

    //name checking
    if (user.usrName === "") {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          usrName: "Please add your username",
        };
      });
    } else {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          usrName: "",
        };
      });
    }

    //age checking
    if (user.age !== "") {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          age: "Please add your age",
        };
      });
    } else {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          age: "",
        };
      });
    }

    //testing age format
    if (!regexAge.test(user.age)) {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          age: "This is not a valid age format!",
        };
      });
    } else {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          age: "",
        };
      });
    }

    //image checking
    if (user.imgLnk === "") {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          imgLnk: "Please add your Profile image link",
        };
      });
    } else {
      setLoginErrors((prevLoginErrors) => {
        return {
          ...prevLoginErrors,
          imgLnk: "",
        };
      });
    }
  };

  const saveChanges = (e) => {
    e.preventDefault();
    verifyCredientials();

    setSaveAccChanges(true);
    setDeleteAcc(false);
  };

  const deleteAccount = (e) => {
    e.preventDefault();
    setDeleteAcc(true);
    setSaveAccChanges(false);
  };

  useEffect(() => {
    if (saveAccChanges === true) {
      if (
        loginErrors.usrName === "" &&
        loginErrors.age === "" &&
        loginErrors.email === "" &&
        loginErrors.pwd === "" &&
        loginErrors.pwd2 === "" &&
        loginErrors.imgLnk === ""
      ) {
        localStorage.setItem("user", JSON.stringify(user));
        console.log("everything's dandy");

        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        setSaveAccChanges(false);
      }
    }
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
      localStorage.setItem(
        "user",
        JSON.stringify({
          usrName: "",
          email: "",
          pwd: "",
          pwd2: "",
          imgLnk: "",
          age: "",
        })
      );
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  }, [deleteAcc]);

  return (
    <form>
      <label htmlFor="usrName">Name</label>
      <span>{loginErrors.usrName}</span>
      <input
        type="text"
        id="usrName"
        name="usrName"
        value={user.usrName}
        onChange={changeHandler}
        required
      />
      <label htmlFor="age">Age</label>
      <span>{loginErrors.age}</span>
      <input
        type="text"
        id="age"
        name="age"
        value={user.age}
        onChange={changeHandler}
        required
      />
      <label htmlFor="email">Email</label>
      <span>{loginErrors.email}</span>
      <input
        type="email"
        id="email"
        name="email"
        value={user.email}
        onChange={changeHandler}
        required
      />
      <label htmlFor="pwd">Enter Password</label>
      <span>{loginErrors.pwd}</span>
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
      <span>{loginErrors.pwd2}</span>
      <input
        type="password"
        id="pwd2"
        name="pwd2"
        value={user.pwd2}
        onChange={changeHandler}
        required
        minLength={8}
      />
      <label htmlFor="imgLnk">Enter your Image Link</label>
      <span>{loginErrors.imgLnk}</span>
      <input
        type="text"
        id="imgLnk"
        name="imgLnk"
        value={user.imgLnk}
        onChange={changeHandler}
        required
      />

      <button onClick={saveChanges}>Save</button>
      <button onClick={deleteAccount}>Delete Account</button>
    </form>
  );
};
