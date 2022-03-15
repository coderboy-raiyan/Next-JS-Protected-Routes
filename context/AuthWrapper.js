import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authLoading, onAuthStateChange } from "../redux/reducers/authReducer";

const AuthWrapper = ({ children }) => {
  const auth = getAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(onAuthStateChange(user));
        console.log(user);
      } else {
        dispatch(onAuthStateChange({}));
      }
      dispatch(authLoading(false));
    });
  }, [auth, dispatch]);

  return <div>{children}</div>;
};

export default AuthWrapper;
