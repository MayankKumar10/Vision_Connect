import axios from "axios";

const getAllPostAPI = async () => {
  return await axios.get("/api/posts");
};

const editPostAPI = async (
  token,
  postId,
  postData
) => {
  return await axios.post(
    `/api/posts/edit/${postId}`,
    {postData},
    {headers: {authorization: token}}
  );
};

const deletePostAPI = async (token, postId) => {
  return await axios.delete(
    `/api/posts/${postId}`,

    {headers: {authorization: token}}
  );
};

const createPostAPI = async (token, postData) => {
  return await axios.post(
    "/api/posts",
    {postData},
    {headers: {authorization: token}}
  );
};

const likePostAPI = async (token, postId) => {
  return await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {headers: {authorization: token}}
  );
};

const dislikePostAPI = async (token, postId) => {
  return await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {headers: {authorization: token}}
  );
};

const getAllBookmarkAPI = async (token) => {
  return await axios.get(
    "/api/users/bookmark",

    {headers: {authorization: token}}
  );
};

const addBookmarkAPI = async (postId, token) => {
  return await axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {headers: {authorization: token}}
  );
};

const removeBookmarkAPI = async (postId, token) => {
  return await axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {headers: {authorization: token}}
  );
};

const getCommentAPI = async (postId) => {
  return await axios.get(`/api/comments/${postId}`);
};

const addCommentAPI = async (
  postId,
  commentData,
  token
) => {
  return await axios.post(
    `/api/comments/add/${postId}`,
    {commentData},
    {headers: {authorization: token}}
  );
};

const deleteCommentAPI = async (
  postId,
  commentId,
  token
) => {
  return await axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    {headers: {authorization: token}}
  );
};

const editCommentAPI = async (
  postId,
  commentData,
  commentId,
  token
) => {
  return await axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    {commentData},
    {headers: {authorization: token}}
  );
};

export {getAllPostAPI,
  editPostAPI,
  deletePostAPI,
  createPostAPI,
  likePostAPI,
  dislikePostAPI,
  getAllBookmarkAPI,
  addBookmarkAPI,
  removeBookmarkAPI,
  getCommentAPI,
  addCommentAPI,
  deleteCommentAPI,
  editCommentAPI,}
