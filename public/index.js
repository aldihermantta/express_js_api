const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const Routes = require('../src/routes/routes');
const middlewareLogRequest = require('../src/middleware/logs');

const app = express();
const corsOptions = {credentials:true, origin: process.env.URL || '*'};
//setting port
const PORT = 5000;

app.use(middlewareLogRequest);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));    
app.use(cors(corsOptions));
//simple routes
app.get('/', (req, res) =>{
    res.json({
        message: 'Selamat datang di APi ...'
    })
});
//routes api
app.use('/api', Routes);
//listening to server connection
app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
})