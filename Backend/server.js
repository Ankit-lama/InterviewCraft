require('dotenv').config();
const server = require('./src/app') ;

//database connection 
const connectDB = require('./src/config/database')
connectDB();

server.listen(3000, ()=> {
    console.log('Server is running on 3000 port.')
});

