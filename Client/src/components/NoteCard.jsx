import { useNotes } from "../context/NotesContext";
import { Link } from "react-router-dom";

function NoteCard({ note }) {

    const {deleteNotes} = useNotes();

    return (
    <div className="bg-blue-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between">
        <h1 className="text-2xl font-bold text-cyan-200">{note.title}</h1>
        <div className="flex gap-x-2 items-center">
            <button className= "text-pink-300" onClick={() => {
                deleteNotes (note._id)
            }}>delete</button>
            <Link className= "text-pink-300" to={`/notes/${note._id}`}>edit</Link>
        </div>
        </header>
        <p className="text-teal-100">{note.description}</p>
        <p className="text-pink-500">{new Date(note.date).toLocaleDateString()}</p>
    </div>
    );
}

export default NoteCard;
