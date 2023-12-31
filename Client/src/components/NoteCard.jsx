import { useNotes } from "../context/NotesContext";
import { Link } from "react-router-dom";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

function NoteCard({ note }) {

    const {deleteNotes} = useNotes();

    return (
    <div className="bg-blue-800 max-w-md w-full p-10 rounded-md">
        <header className="flex justify-between">
        <h1 className="text-2xl font-bold text-cyan-200">{note.title}</h1>
        <div className="flex gap-x-2 items-center">
            <button className= "bg-pink-300 hover:bg-pink-400 px-4 py-2 rounded-md" onClick={() => {
                deleteNotes (note._id)
            }}>delete</button>
            <Link className= "bg-teal-300 hover:bg-pink-400 px-4 py-2 rounded-md" to={`/notes/${note._id}`}>edit</Link>
        </div>
        </header>
        <p className="text-teal-100">{note.description}</p>
        <p className="text-pink-500">{dayjs(note.date).utc().format("DD/MM/YYYY")}</p>
    </div>
    );
}

export default NoteCard;
