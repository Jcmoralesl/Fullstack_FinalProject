import { useEffect } from "react"
import { useNotes } from "../context/NotesContext"

function NotePage () {
    const {getNotes, notes} = useNotes();
    
    useEffect(() =>{
        getNotes()
    }, [])
    
    if (notes.length === 0) return (<h1>No Notes</h1>)

    return <div>
        {
            notes.map(note => (
                <div key={note._id}>
                    <h1>{note.title}</h1>
                    <p>{note.description}</p>
                </div>
            ))
        }
    </div>
    
}

export default NotePage