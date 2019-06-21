module.exports = require("../config/imports").express
                 .Router()
                 .post("/",(req,res)=>{
    let mongodb = require("../config/imports").mongodb;
    let nareshIT = mongodb.MongoClient;
    nareshIT.connect("mongodb://localhost:27017/mean",
                                                (err,db)=>{
        db.collection("products")
          .updateOne({p_id:req.body.p_id},
                     {$set:{p_name:req.body.p_name,
                            p_cost:req.body.p_cost}},
                     (err,result)=>{
            if(err)
                res.send({update:'fail'});
            else
                res.send({update:'success'});
        });
    });
});