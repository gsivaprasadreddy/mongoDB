module.exports = require("../config/imports").express
                 .Router()
                 .post("/",(req,res)=>{
    let mongodb = require("../config/imports").mongodb;
    let nareshIT = mongodb.MongoClient;
    nareshIT.connect("mongodb://localhost:27017/mean",
                                                (err,db)=>{
        db.collection("products")
          .insertOne({
              p_id:req.body.p_id,
              p_name:req.body.p_name,
              p_cost:req.body.p_cost
          },(err,result)=>{
            if(err)
                res.send({insert:"fail"});
            else
                res.send({insert:"success"})
        });
    });
});