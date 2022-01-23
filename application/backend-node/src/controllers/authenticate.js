const bcrypt = require('bcryptjs')
const user = require('../models/user')

exports.login= async (req, res)=>{
    const { userName, password } = req.body

    try{
        const userLogin = await user.findOne({ userName })

        if(!userLogin) throw Error("Sellise kasutajanimega kasutajat ei eksisteeri!")

        const userMatch = await bcrypt.compare(password, userLogin.password)
        if(!userMatch) throw Error("Sisestatud parool või kasutajanimi on vale!")

        const userTemp = {
            id: userLogin.id,
            firstName: userLogin.firstName,
            lastName: userLogin.lastName,
            userName: userLogin.userName
        }

        res.status(200).json({ loggedUser: userTemp })
    } catch (e) {
        res.status(400).json({ error: e.message})
    }
}

exports.signUp= async (req, res)=>{
    const { firstName, lastName, userName, email, password } = req.body

    try {
        const attemptedUser = await user.findOne({ email })
        if (attemptedUser) throw Error("Selle emailiga kasutaja juba eksisteerib!")

        const salt = await bcrypt.genSalt(10)
        if (!salt) throw Error("Miskit läks väga nihu! (789)")

        const hash = await bcrypt.hash(password, salt)
        if (!hash) throw Error("Miskit läks väga nihu! (790)")

        const newUser = new user({
            firstName,
            lastName,
            userName,
            email,
            password: hash
        })

        const createdUser = await newUser.save()
        if (!createdUser) throw Error("Kasutaja loomine ebaõnnestus")

        res.status(200).json({ message: "Kasutaja loomine õnnestus!" })

    } catch(e) {
        res.status(400).json({ error: e.message })
    }
}