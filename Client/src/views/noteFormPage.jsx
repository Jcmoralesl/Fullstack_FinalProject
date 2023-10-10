import {useForm} from 'react-hook-form'
import { useNotes } from '../context/NotesContext';

function NoteFormPage () {

    const {register, handleSubmit} = useForm ()
    const {createNotes} = useNotes()

    const onSubmit = handleSubmit((data) =>{
        createNotes(data);
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" {... register("title")} placeholder="Title" autoFocus/>
                <textarea placeholder="Description"rows="3" {...register("description")}></textarea>
                <button>
                    Save
                </button>
            </form>
        </div>
    )
}

export default  NoteFormPage