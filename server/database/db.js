import mongoose from "mongoose";

export const DBConnection = async () =>{
    const DB_URL = `mongodb://user:filesharing@ac-0xxgvnr-shard-00-00.zqqk1zd.mongodb.net:27017,ac-0xxgvnr-shard-00-01.zqqk1zd.mongodb.net:27017,ac-0xxgvnr-shard-00-02.zqqk1zd.mongodb.net:27017/?ssl=true&replicaSet=atlas-5g5oqt-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(DB_URL,{ useNewUrlParser: true});
        console.log('DataBase Connected Successfully');
    } catch (error) {
        console.error('Error while connecting with the database',error.message);
    }
}