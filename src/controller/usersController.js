const pool =require('../config/database');
const UsersModel = require('../models/usersModel');

const getAllUsers = (req, res) => {
    pool.query("select * from users", (err, result) => {
        if(err) throw err;
        const data  =result.rows;
        res.json({
            status: 200,
            message: 'menampilkan data user',
            data: data
        });
    })
}

const getAllUsers2 = async (req, res) => {
    try {
    const query = await UsersModel.getAllUsers2();
    const data = query.rows;
    res.json({
            status: 200,
            message: 'getting all users',
            data: data
        });
    } catch (error) {
    res.status(500).json({
        status: 500,
        message: 'server error'
    })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req ;

    if(!body.email || !body.name || !body.address){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'created new data user succesfull',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;

    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'updated data user succesfull',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            status: 200,
            message: 'delete data succesfull',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    getAllUsers2,
    createNewUser,
    updateUser,
    deleteUser
}