import Notes from '../models/notes.model.js'

export const getNotes = async (req, res) => {
    const notes = await Notes.find ({
        user: req.user.id
    }).populate('user')
    res.json(notes)
}

export const getNote = async (req, res) => {
    const note = await Notes.findById(req.params.id).populate('user')
    if (!note) return res.status(404).json({message: 'Note not found'})
    res.json(note)
};

export const createNote = async (req, res) => {
    const { title, description, date } = req.body
    const newNotes = new Notes ({
        title,
        description,
        date,
        user: req.user.id
    });
    const savedNote = await newNotes.save()
    res.json(savedNote)
}

export const updateNote = async(req, res) => {
    const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    if (!note) return res.status(404).json({message: 'Note not found'})
    res.json(note)
}

export const deleteNote = async (req, res) => {
    const note = await Notes.findByIdAndDelete(req.params.id)
    if (!note) return res.status(404).json({message: 'Note not found'})
    return res.sendStatus(204);
}

