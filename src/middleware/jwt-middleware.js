import jwt from 'jsonwebtoken';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']; //Bearer TOKEN
    // const token = authHeader && authHeader.split(' ')[1];
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else {
    return res.status(401).json("You are not authenticated!");
    }
    // if (token == null) return res.status(401).json({error:"Null token"});
    // jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    //     if (error) return res.status(403).json({error : error.message});
    //     req.user = user;
    //     next();
    // });
}

module.exports = authenticateToken;