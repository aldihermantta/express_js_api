const pool =require('../config/database');

const findOne = (username) => {
    const SQLQuery = ` select name, username , email from public.users u where username ='${username}' `;

    return pool.query(SQLQuery);
}

const register = (body, password) => {
    const SQLQuery = ` INSERT INTO public.users (name, username, email, password)
                            VALUES('${body.name}', '${body.username}', '${body.email}', '${password}') `;

    return pool.query(SQLQuery);
}
module.exports = {
    findOne,
    register,
}