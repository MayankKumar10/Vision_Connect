import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addBookmarkAPI, addCommentAPI, createPostAPI, deleteCommentAPI, deletePostAPI, dislikePostAPI, editCommentAPI, editPostAPI, getAllBookmarkAPI, getAllPostAPI, likePostAPI, removeBookmarkAPI } from '../API';
import {toast} from 'react-toastify';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async(_, {rejectWithValue})=>{
    try{
      const res = await getAllPostAPI();
      return res.data.posts;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const editPost = createAsyncThunk(
  'posts/editPost',
  async({token, postId, postData}, {rejectWithValue})=>{
    try{
      const res = await editPostAPI(token, postId, postData)
      return res.data.posts;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async({token, postId}, {rejectWithValue})=>{
    try{
      const res = await deletePostAPI(token, postId)
      return res.data.posts;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const createPost = createAsyncThunk(
  'posts/createPost',
  async({token, postData}, {rejectWithValue})=>{
    try{
      const res = await createPostAPI(token, postData)
      console.log(res.data.posts);
      return res.data.posts
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const likePost = createAsyncThunk(
  'posts/likePost',
  async({token, postId}, {rejectWithValue})=>{
    try{
      const res = await likePostAPI(token, postId)
      return res.data.posts;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const dislikePost = createAsyncThunk(
  'posts/dislikePost',
  async({token, postId}, {rejectWithValue})=>{
    try{
      const res = await dislikePostAPI(token, postId)
      return res.data.posts;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const getBookmarks = createAsyncThunk(
  'posts/getBookmarks',
  async({token}, {rejectWithValue})=>{
    try{
      const res = await getAllBookmarkAPI(token);
      return res.data;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)


export const addBookmark = createAsyncThunk(
  'posts/addBookmark',
  async({token, postId}, {rejectWithValue})=>{
    try{
      const res = await addBookmarkAPI(postId, token)
      return res.data;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)


export const removeBookmark = createAsyncThunk(
  'posts/removeBookmark',
  async({token, postId}, {rejectWithValue})=>{
    try{
      const res = await removeBookmarkAPI(token, postId)
      return res.data;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)


export const addComments = createAsyncThunk(
  'posts/addComments',
  async({postId, commentData, token}, {rejectWithValue})=>{
    try{
      const res = await addCommentAPI(postId, commentData, token)
      return res.data.posts;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)


export const editComment = createAsyncThunk(
  'posts/editComment',
  async({postId, commentData, token}, {rejectWithValue})=>{
    try{
      const res = await editCommentAPI(postId, commentData, token);
      return res.data.posts;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
)

export const deleteComment = createAsyncThunk(
  'posts/deleteComment',
  async({postId, commentId, token}, {rejectWithValue})=>{
    try{
      const res = await deleteCommentAPI(postId, commentId, token);
      return res.data.posts;
    }catch(err){
      return rejectWithValue(err.response.data)
    }
  }
);

const initialState = {
  userPosts: [],
  allPosts: [],
	bookmarkedPosts: [],
  likesList: [],
  openLikesList: false,
	sortBy: "latest",
	gifSelected: "",
}

const postSlice = createSlice({
  name: "posts",
	initialState,
	reducers: {
		sortByValue: (state, action) => {
			state.sortBy = action.payload;
		},
		setOpenLikesList: (state, action) => {
			state.openLikesList = action.payload.likesListState;
			state.likesList = action.payload.likesListVal;
		},
		gifClicked: (state, action) => {
			state.gifSelected = action.payload;
		},
	},
	extraReducers: {
		[getPosts.fulfilled]: (state, { payload }) => {
			state.allPosts = payload;
		},
		[getPosts.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[editPost.fulfilled]: (state, { payload }) => {
			toast.success("Post updated successfully!");
			state.allPosts = payload;
		},
		[editPost.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[deletePost.fulfilled]: (state, { payload }) => {
			toast.success("Post deleted successfully!");
			state.allPosts = payload;
		},
		[deletePost.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[createPost.fulfilled]: (state, { payload }) => {
			toast.success("Post created successfully!");
			state.allPosts = payload;
		},
		[createPost.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[likePost.fulfilled]: (state, { payload }) => {
			toast.success("Liked Post!");
			state.allPosts = payload;
		},
		[likePost.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[dislikePost.fulfilled]: (state, { payload }) => {
			state.allPosts = payload;
		},
		[dislikePost.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[getBookmarks.fulfilled]: (state, { payload }) => {
			state.bookmarkedPosts = payload.bookmarks;
		},
		[getBookmarks.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[addBookmark.fulfilled]: (state, { payload }) => {
			toast.success("Bookmarked post!");
			state.bookmarkedPosts = payload.bookmarks;
		},
		[addBookmark.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[removeBookmark.fulfilled]: (state, { payload }) => {
			toast.success("Removed bookmark!");
			state.bookmarkedPosts = payload.bookmarks;
		},
		[removeBookmark.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[addComments.fulfilled]: (state, { payload }) => {
			toast.success("comment added!");
			state.allPosts = payload;
		},
		[addComments.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[deleteComment.fulfilled]: (state, { payload }) => {
			toast.success("comment removed!");
			state.allPosts = payload;
		},
		[deleteComment.rejected]: (state, { payload }) => {
			console.log(payload);
		},
		[editComment.fulfilled]: (state, { payload }) => {
			toast.success("comment updated!");
			state.allPosts = payload;
		},
		[editComment.rejected]: (state, { payload }) => {
			console.log(payload);
		},
	},
}) 

 const { sortByValue, setOpenLikesList, gifClicked, GifLoading } =
	postSlice.actions;
 const postReducer = postSlice.reducer;

export {sortByValue, setOpenLikesList, gifClicked, GifLoading, postReducer}