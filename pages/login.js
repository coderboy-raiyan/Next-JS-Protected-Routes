import React from "react";
import { useDispatch } from "react-redux";
import { googleSignIn } from "../redux/reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(googleSignIn())}>Google</button>
    </div>
  );
};

export default Login;
