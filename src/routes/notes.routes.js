import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createNote, getNote, getNotes, updateNote, deleteNote } from "../controllers/notes.controller.js";
import { validateSchema } from "../middlewares/validator.midd.js";
import { createNoteSchema } from "../schemas/notes.schema.js";

const router = Router()

router.get('/notes', authRequired, getNotes)

router.get('/notes/:id', authRequired, getNote)

router.post('/notes', authRequired, validateSchema(createNoteSchema), createNote)

router.delete('/notes/:id', authRequired, deleteNote)

router.put('/notes/:id', authRequired, updateNote)


export default router