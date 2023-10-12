import axios from './axios'

export const getNotesRequest = () => axios.get('https://notes-backend-nqp8.onrender.com/api/notes')

export const getNoteRequest = (id) => axios.get(`https://notes-backend-nqp8.onrender.com/api/notes/${id}`)


export const createNotesRequest = (note) => axios.post('https://notes-backend-nqp8.onrender.com/api/notes', note)

export const updateNotesRequest = (id, note) => axios.put(`https://notes-backend-nqp8.onrender.com/api/notes/${id}`, note)

export const deleteNotesRequest = (id) => axios.delete(`https://notes-backend-nqp8.onrender.com/api/notes/${id}`)