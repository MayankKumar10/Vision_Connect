import {configureStore} from "@reduxjs/toolkit";
import {authReducer, postReducer, usersReducer} from "../Redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    posts: postReducer,
  },
});
