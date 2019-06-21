module.exports = require("../config/imports").express
                 .Router()
                 .get("/",(req,res)=>{
    let mongodb = require("../config/imports").mongodb;
    let nareshIT = mongodb.MongoClient;
    nareshIT.connect("mongodb://localhost:27017/mean",
                                                (err,db)=>{
        db.collection("products").find().toArray((err,array)=>{
            res.send(array);
        });
    });
});