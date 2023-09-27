import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
const router = Router()

router.get('/notes', authRequired, (req, res) => {
    res.send("notes")
})

export default router