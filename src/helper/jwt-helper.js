const jwt = require('jsonwebtoken');

//Generate an access token and a refresh token for this database user
function jwtTokens({ user_id, user_name, user_email }) {
    const user = { user_id, user_name, user_email}; 
    const accessToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '86400s' });
    return ({ 
        accessToken, 
        tokentype:"berier_token"
    });
}

module.exports = {
    jwtTokens,
}