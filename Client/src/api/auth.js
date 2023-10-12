import axios from "./axios";

export const registerRequest = user => axios.post(`https://notes-backend-nqp8.onrender.com/api/register`, user);

export const  loginRequest = user => axios.post(`https://notes-backend-nqp8.onrender.com/api/login`, user)

export const verifyTokenRequest = () => axios.get('https://notes-backend-nqp8.onrender.com/api/verify')
