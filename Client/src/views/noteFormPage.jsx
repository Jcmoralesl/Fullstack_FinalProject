import {useForm} from 'react-hook-form'
import { useNotes } from '../context/NotesContext';
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';

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
            }
        }
        loadNote()
    }, [])

    const onSubmit = handleSubmit((data) =>{
        if (params.id) {
            updateNote(params.id, data)
        } else {
            createNotes(data);
        }
        navigate('/notes');
    });

    return (
        <div className='bg-blue-800 max-w-md w-full p-10 rounded-md'>
            <form onSubmit={onSubmit}>
                <input type="text" {... register("title")} placeholder="Title" autoFocus
                className='w-full bg-blue-200 text-black px-4 py-2 rounded-md my-3'/>
                <textarea placeholder="Description"rows="3" {...register("description")}
                className='w-full bg-blue-200 text-black px-4 py-2 rounded-md my-4'></textarea>
                <button className="bg-blue-200 hover:bg-gray-300 text-blue-700 font-semibold py-2 px-4  border-gray-400 rounded shadow my-4">
                    Save
                </button>
            </form>
        </div>
    )
}

export default  NoteFormPage