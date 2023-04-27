require('dotenv').config()
const jwt = require('jsonwebtoken');
const authModel = require('../models/authModel');
const { jwtTokens } = require('../helper/jwt-helper');
const bcrypt = require('bcrypt');
const CryptoJS = require("crypto-js");

const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const users = await authModel.findOne(username);
        if (users.rows.length === 0) return res.status(401).json({error:"username salah!"});
        const [data] = users.rows;

        // const validPassword = await bcrypt.compare(password, users.rows[0].password);
        // if (!validPassword) return res.status(401).json({error: "Incorrect password"});
        
        let tokens = jwtTokens(users.rows[0]);//membuat accessToken
        
        res.status(200).json({
            status: 200,
            message: "login berhasil",
            data : {
                data_user: data,
                tokens: tokens,
            }
        });
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}
//durung iso
const register = async (req, res) => {
    const {body} = req ;
    const password = bcrypt.hashSync(process.env.PASS_SEC, body.password);
    
    try {
        await UsersModel.createNewUser(body, password);
        res.status(201).json({
            message: 'created new data user succesfull',
            data: body
        })
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}

module.exports = {
    login,
    register,
}