import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import initializeAuth from "../Firebase/Firebase.init";
initializeAuth();

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [oAuthLoading, setOAuthLoading] = useState(false);

  // google Sign In
  const googleSignIn = async () => {
    setOAuthLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setOAuthLoading(false);
    } catch (err) {
      const errorMessage = err.message;
      console.log(errorMessage);
      setError(errorMessage);
    }
  };

  // logout
  const logOut = async () => {
    setOAuthLoading(true);
    try {
      await signOut(auth);
      setUser({});
      setOAuthLoading(false);
    } catch (err) {
      const errorMessage = err.message;
      console.log(errorMessage);
      setError(errorMessage);
    }
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
        setLoading(false);
      }),
    [auth]
  );

  const returnObj = {
    user,
    loading,
    oAuthLoading,
    error,
    googleSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={returnObj}>
      {loading ? "Loading..." : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
