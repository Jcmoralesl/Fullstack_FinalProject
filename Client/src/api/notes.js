import axios from './axios'

export const getNotesRequest = () => axios.get('/notes')

export const getNoteRequest = (id) => axios.get(`/notes/${id}`)


export const createNotesRequest = (note) => axios.post('/notes', note)

export const updateNotesRequest = (note) => axios.put(`/notes/${note._id}`, note)

export const deleteNotesRequest = (id) => axios.delete(`/notes/${id}`)