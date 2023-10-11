import Notes from '../models/notes.model.js'

export const getNotes = async (req, res) => {
    try {
        const notes = await Notes.find ({
        user: req.user.id
        }).populate('user')
        res.json(notes)
    } catch (error) {
        return res.status(404).hjson({message: "Notes not found"})
    }
}

export const getNote = async (req, res) => {
    try {
        const note = await Notes.findById(req.params.id).populate('user')
        if (!note) return res.status(404).json({message: 'Note not found'})
        res.json(note)
    }catch (error){
        return res.status(404).json({message: "Note not found"})
    }
};

export const createNote = async (req, res) => {
    try {
        const { title, description, date } = req.body
        const newNotes = new Notes ({
        title,
        description,
        date,
        user: req.user.id
    });
    const savedNote = await newNotes.save()
    res.json(savedNote)
    } catch (error) {
        return res.sendStatus(501);
    }
}

export const updateNote = async(req, res) => {
    try {
        const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        if (!note) return res.status(404).json({message: 'Note not found'})
        res.json(note)
    } catch (error) {
        return res.status(404).send("Note not found")
    }
}

export const deleteNote = async (req, res) => {
    try {
        const note = await Notes.findByIdAndDelete(req.params.id)
    if (!note) return res.status(404).json({message: 'Note not found'})
    return res.sendStatus(204);
    } catch (error) {
        return 	res.status(500).send();
    }
}

