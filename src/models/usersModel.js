const pool =require('../config/database')

const getAllUsers2 = () => {
    const SQLQuery = "select * from users order by id asc";

    return pool.query(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (name, email, address) 
                        VALUES ('${body.name}', '${body.email}', '${body.address}')`;

    return pool.query(SQLQuery);
}

const updateUser = (body, idUser) => {
    const SQLQuery = `  UPDATE users 
                        SET name='${body.name}', email='${body.email}', address='${body.address}' 
                        WHERE id=${idUser}`;

    return pool.query(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = 'DELETE FROM users WHERE id=${idUser}';

    return pool.query(SQLQuery);
}

module.exports = {
    getAllUsers2,
    createNewUser,
    updateUser,
    deleteUser,
}