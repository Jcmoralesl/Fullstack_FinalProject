import {useForm} from 'react-hook-form'
import { useNotes } from '../context/NotesContext';
import {useNavigate} from 'react-router-dom'

function NoteFormPage () {

    const {register, handleSubmit} = useForm ()
    const {createNotes} = useNotes()
    const navigate = useNavigate ();

    const onSubmit = handleSubmit((data) =>{
        createNotes(data);
        navigate('/notes')
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