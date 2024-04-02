import axios from "axios";

const URL = 'http://127.0.0.1:8000/api/v1/notes/'

export const getAllNotes = () => axios.get(URL)

export const postNote = (note) =>  axios.post(URL, note)

export const deleteNote = (note) => axios.delete(`${URL}${note} `)

export const updateNote = (id, note) => axios.put(`${URL}${id}/ `, note)

export const getByID = (id) => axios.get(`${URL}${id}/ `)