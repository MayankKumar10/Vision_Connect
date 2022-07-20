import axios from "axios";

const getAllUserAPI = async () => {
  return await axios.get("/api/users");
};
const getUserAPI = async (username) => {
  return await axios.get(`/api/users/${username}`);
};
const getUserPostAPI = async (username) => {
  return await axios.get(`/api/posts/user/${username}`);
};
const updateUserAPI = async (userData, token) => {
  return await axios.post(
    "/api/users/edit",
    {userData},
    {headers: {authorization: token}}
  );
};

const followUserAPI = async (
  followUserId,
  token
) => {
  return await axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    {headers: {authorization: token}}
  );
};

const unfollowUserAPI = async (
  followUserId,
  token
) => {
  return await axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    {headers: {authorization: token}}
  );
};


export {getAllUserAPI, getUserAPI, 
  getUserPostAPI, updateUserAPI, followUserAPI, unfollowUserAPI}