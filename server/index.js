import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import { DBConnection } from './database/db.js';

const app = express();

app.use(cors());
app.use('/',router);

const PORT = process.env.PORT || 8000;


DBConnection();

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.listen(PORT, () =>{console.log(`Server is running on PORT ${PORT}`)}) 