/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
// import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import UserService from "services/UserService";
import Alert from "@mui/material/Alert";
import { useCookies } from "react-cookie";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [val, setVal] = useState(0);
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();
  const [userCookie, setUserCookie, removeUserCookie] = useCookies(["user"]);

  function signUp(user) {
    console.log("user");
    console.log(user);
    UserService.postUser(user)
      .then((res) => {
        console.log(res);
        if (res.data.id != null) {
          setCurrentUser(res.data);
          navigate("/profile");
          setUserCookie("user", res.data, { path: "/" });
        } else {
          console.log("HATA");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function signIn(email, password) {
    UserService.signInUser(email, password)
      .then((res) => {
        if (res.data.id) {
          setCurrentUser(res.data);
          console.log(res.data);
          setUserCookie("user", res.data, { path: "/" });
          navigate("/profile");
          return true;
        }
        console.log("YANLIŞ GİRDİ");
        return false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateUserCookie(userDetail) {
    const newUser = {
      ...userCookie.user,
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
    };
    setUserCookie("user", newUser);
  }

  async function logout() {
    await removeUserCookie("user");
    navigate("/authentication/sign-in");
  }

  async function fetchUserToCookie() {
    UserService.getUser(userCookie.user.id).then((res) => {
      setUserCookie("user", res.data, { path: "/" });
    });
  }
  // useEffect(() => { }, [currentUser]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    currentUser,
    signIn,
    signUp,
    logout,
    userCookie,
    updateUserCookie,
    fetchUserToCookie,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
