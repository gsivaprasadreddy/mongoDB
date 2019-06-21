module.exports = require("../config/imports").express.Router()
                 .post("/",(req,res)=>{
    let mongodb = require("../config/imports").mongodb;
    let nareshIT = mongodb.MongoClient;
    nareshIT.connect("mongodb://localhost:27017/mean",
                                                (err,db)=>{
        db.collection("products")
          .deleteOne({p_id:req.body.p_id},(err,result)=>{
            if(err)
                res.send({delete:"fail"});
            else    
                res.send({delete:"success"})
          });
    });
});