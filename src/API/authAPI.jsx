import axios from "axios";

 const loginAPI = async (userDetails) => {
  return await axios.post("/api/auth/login", {
    username: userDetails.username,
    password: userDetails.password,
  });
};

 const signupAPI = async (formVal) => {
  return await axios.post("/api/auth/signup", {
    ...formVal,
  });
};

export {loginAPI, signupAPI}