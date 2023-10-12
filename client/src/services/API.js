import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });

//call back function
//Bearer Token A security token with the property that any party in possession of the token (a “bearer”) 
//can use the token in any way that any other party in possession of it can.

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;