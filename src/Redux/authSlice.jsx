import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { loginAPI } from "../API/authAPI";

const initialState = {
  token: ""||JSON.parse(localStorage.getItem("VisionSocialToken")),
  user: null||JSON.parse(localStorage.getItem("VisionSocialUser")),
  following:[],
  username:'',
  authStatus: "idle",
  authError: null,

  };


export const loginUser = createAsyncThunk(
  "auth/loginUser",
   async ({userDetails}, { rejectWithValue }) => {
    try {
      const res = await loginAPI(userDetails);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

  

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userDetails, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        "/api/auth/signup",
        {
          fullName: userDetails.fullName,
          username: userDetails.username,
          password: userDetails.password,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


 export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.clear()
      console.log("logout");
      //Toast('Logged Out Successful')
    },
  },

  extraReducers: {
		[loginUser.pending]: (state) => {
			state.authStatus = "loading";
		},
		[loginUser.fulfilled]: (state, { payload }) => {
    state.user = payload.foundUser;
    state.token = payload.encodedToken;
		state.authStatus = "success";
    state.following = payload.foundUser.following;
    state.username = payload.foundUser.username;
    localStorage.setItem('VisionSocialToken', JSON.stringify(payload.encodedToken));      
    localStorage.setItem("VisionSocialUser", JSON.stringify(payload.foundUser));
    console.log('authSlice',state.following)
  },
		[loginUser.rejected]: (state, { payload }) => {
			state.authStatus = "rejected";
			state.authError = payload.errors;
		},
		[signupUser.pending]: (state) => {
			state.authStatus = "loading";
		},

		[signupUser.fulfilled]: (state, { payload }) => {
			state.user = payload.createdUser;
			state.token = payload.encodedToken;
			state.authStatus = "success";
			localStorage.setItem("VisionSocialToken", JSON.stringify(payload.encodedToken));
			localStorage.setItem("VisionSocialUser", JSON.stringify(payload.createdUser));
		},
		[signupUser.rejected]: (state, { payload }) => {
			state.authStatus = "rejected";
			state.authError = payload.errors;
		},
	},

 
})

export const {logout} = authSlice.actions;
export const authReducer = authSlice.reducer;
