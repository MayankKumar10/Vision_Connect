import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { followUserAPI, getAllUserAPI, 
  getUserAPI, getUserPostAPI, 
  unfollowUserAPI, updateUserAPI } from '../API/userAPI';
import {useSelector} from 'react-redux';


export const getAllUsers = createAsyncThunk( 
  'users/getAllUsers', 
  async(_, {rejectWithValue})=>{
    try{
      const res = await getAllUserAPI();
      return res.data;
    }catch(err){
      return rejectWithValue(err.responseponse.data)
    }
  }
)

export const getUsers = createAsyncThunk(
  'users/getUsers', 
  async({username},{rejectWithValue})=>{
  try{
    const res = await getUserAPI(username);
    console.log("getUserQ", res.data.user)
    return res.data;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const getUserPost = createAsyncThunk(
  'users/getUserPost', 
  async({username},{rejectWithValue})=>{
  try{
    const res = await getUserPostAPI(username);
    return res.data;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const followUser = createAsyncThunk(
  'users/followUser', 
  async({followUserId, token},{rejectWithValue})=>{
  try{
    const res = await followUserAPI(followUserId, token);
    return res.data;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const unfollowUser =  createAsyncThunk(
  'users/unfollowUser', 
  async({followUserId, token},{rejectWithValue})=>{
  try{
    const res = await unfollowUserAPI(followUserId, token);
    return res.data;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const updateUser = createAsyncThunk(
  'users/updateUser', 
  async({userDetails: userData, token},{rejectWithValue})=>{
  try{
    const res = await updateUserAPI(userData, token);
    console.log('updateUser',res.data.user)
    return res.data.user;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

const initialState = {
  userToDisplay: null,
  userPosts: [],
  allUsers: [],
}

 const usersSlice =  createSlice({
  name:'users',
  initialState,
  reducers:{
    resetProfile: (state)=> {
      state.userToDisplay = null;
      state.userPosts = [];
    }
  },
  extraReducers:{
    [getUsers.fulfilled]: (state,{payload})=>{
      state.userToDisplay = payload.user;
      console.log('getUsers',payload.user);
    },
    [getUsers.rejected]: (state,{payload})=>{
      console.log(payload);
    },
    [getUserPost.fulfilled]: (state,{payload})=>{
      state.userPosts = payload.posts;
    },
    [getUserPost.rejected]: (state,{payload})=>{
      console.log(payload);
    },
    [updateUser.fulfilled]: (state,{payload})=>{
      state.allUsers = state.allUsers.map((user)=>
      user.username === payload.username ? payload : user
      );
      state.userToDisplay = payload;
    },
    [updateUser.rejected]: (state,{payload})=>{
      console.log(payload);
    },
    [followUser.fulfilled]: (state,{payload})=>{
      const {user, followUser} = payload;
      state.allUsers = state.allUsers.map((currUser)=>
      currUser.username === user.username ? user : currUser
      );
      state.allUsers = state.allUsers.map((currUser)=>
      currUser.username === followUser.username ? followUser : currUser
      )
      state.userToDisplay = followUser;
    },
    [followUser.rejected]: (state,{payload})=>{
      console.log(payload);
    },
    [unfollowUser.fulfilled]: (state,{payload})=>{
      const {user, followUser} = payload;
      state.allUsers = state.allUsers.map((currUser)=>
      currUser.username === user.username ? user : currUser
      );
      state.allUsers = state.allUsers.map((currUser)=>
      currUser.username === followUser.username ? followUser : currUser
      )
      state.userToDisplay = payload.followUser;
    },
    [unfollowUser.rejected]: (state,{payload})=>{
      console.log(payload);
    },
    [getAllUsers.fulfilled]: (state,{payload})=>{
      state.allUsers = payload.users;
    },
    [getAllUsers.rejected]: (state,{payload})=>{
      console.log(payload);
    },
  }
});

const usersReducer = usersSlice.reducer;
const {resetProfile} = usersSlice.actions;
const useProfile = () => useSelector((state)=> state.users)

export {usersReducer, resetProfile, useProfile}