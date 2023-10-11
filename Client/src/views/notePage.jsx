import { useEffect } from "react"
import { useNotes } from "../context/NotesContext"
import NoteCard from "../components/NoteCard"

function NotePage () {
    const {getNotes, notes} = useNotes();
    
    useEffect(() =>{
        getNotes()
    }, [])
    
    if (notes.length === 0) return (<h1>No Notes</h1>)

    return (
    <div className="grid grid-cols-3 gap-2">
        {notes.map((note) => (
                <NoteCard note={note} key={note._id} />
            ))}
    </div>
    )
}

export default NotePage