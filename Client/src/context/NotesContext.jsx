import { createContext, useContext, useState } from "react";
import {createNotesRequest, getNotesRequest} from '../api/notes'

const NoteContext = createContext();

export const useNotes = () => {
    const context = useContext(NoteContext)

    if(!context) {
        throw new Error("useNote must be used within a NoteProvider")
    }

    return context
}

export function NoteProvider ({children}) {

    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        try {
            const res = await getNotesRequest ()
            setNotes(res.data)
        } catch (error){
            console.log(error)
        }
    }

    const createNotes = async (note) => {
        const res = await createNotesRequest(note)
        console.log(res)
    }

    return (
        <NoteContext.Provider value = {{
            notes,
            createNotes,
            getNotes
        }}>
            {children}
        </NoteContext.Provider>
    )
}