import {useForm} from 'react-hook-form'
import { useNotes } from '../context/NotesContext';
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

function NoteFormPage () {

    const {register, handleSubmit, setValue} = useForm ()
    const {createNotes, getNote, updateNote} = useNotes()
    const navigate = useNavigate ();
    const params = useParams();


    useEffect(()=> {
        async function loadNote () {
            if (params.id) {
                const note = await getNote(params.id)
                setValue('title', note.title)
                setValue('description', note.description)
                setValue('date', dayjs(note.date).utc().format('YYYY-MM-DD'))
            }
        }
        loadNote()
    }, [])

    const onSubmit = handleSubmit((data) =>{
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        };
        
        if (params.id) {
            updateNote(params.id, dataValid)
        } else {
            createNotes(dataValid)
        }

        navigate('/notes');
    });

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        <div className='bg-blue-800 max-w-md w-full p-10 rounded-md'>
            <form onSubmit={onSubmit}>
                <label className="text-white" htmlFor="title">Title</label>
                <input type="text" {... register("title")} placeholder="Title" autoFocus
                className='w-full bg-blue-200 text-black px-4 py-2 rounded-md my-3'/>
                
                <label className="text-white" htmlFor="description">Description</label>
                <textarea placeholder="Description"rows="3" {...register("description")}
                className='w-full bg-blue-200 text-black px-4 py-2 rounded-md my-4'></textarea>
                
                <label className="text-white"htmlFor="date">Date</label>
                <input className='w-full bg-blue-200 text-black px-4 py-2 rounded-md my-4' type="date" {... register('date')} />
                <button className="bg-blue-200 hover:bg-gray-300 text-blue-700 font-semibold py-2 px-3 rounded-md my-4">
                    Save
                </button>
            </form>
        </div>
        </div>
    )
}

export default  NoteFormPage