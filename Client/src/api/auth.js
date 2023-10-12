import axios from "./axios";

export const registerRequest = user => axios.post(`/register`, user);

export const  loginRequest = user => axios.post(`https://notes-backend-nqp8.onrender.com/api/login`, user)

export const verifyTokenRequest = () => axios.get('/verify')
