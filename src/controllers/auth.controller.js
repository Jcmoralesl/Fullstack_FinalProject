import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'


// REGISTER 

export const register = async (req, res) => {
    const {email, password, username} = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User ({
            username,
            email,
            password: passwordHash,
        })

        const userSaved = await newUser.save()

        const token = await createAccessToken({id: userSaved._id})
        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt,
            });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// LOGIN 

export const login = async (req, res) => {
    const {email, password} = req.body

    try {
        const userFound = await User.findOne ({email})
        if (!userFound) return res.status(400).json({message: 'User not found'});

        const isMatch = await bcrypt.compare(password, userFound.password)

        if (!isMatch) return res.status(400).json ({message: "Incorrect password"})

        const token = await createAccessToken({id: userFound._id})

        res.cookie('token', token)
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createAt: userFound.createdAt,
            updateAt: userFound.updatedAt,
            });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// LOGOUT 

export const logout = async (req, res) => {}