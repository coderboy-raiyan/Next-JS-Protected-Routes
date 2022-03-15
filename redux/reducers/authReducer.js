import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuth from "./../../Firebase/Firebase.init";
initializeAuth();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export const googleSignIn = createAsyncThunk("user/googleSignIn", async () => {
  try {
    const user = await signInWithPopup(auth, googleProvider);
    return user;
  } catch (error) {
    const errorMessage = error.message;
    return errorMessage;
  }
});

export const authReducer = createSlice({
  name: "user/auth",
  initialState,
  reducers: {
    onAuthStateChange: (state, action) => {
      state.user = action.payload;
    },
    authLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(googleSignIn.fulfilled, (state, action) => {
      state.user = action?.payload;
      state.loading = false;
      if (action?.payload?.errorMessage) {
        state.error = action?.payload;
      }
    });
    builder.addCase(googleSignIn.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { onAuthStateChange, authLoading } = authReducer.actions;
export default authReducer.reducer;
