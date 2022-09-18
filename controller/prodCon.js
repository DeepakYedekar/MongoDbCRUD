const {collection}=require('../db/connection');
const CreateProduct=async(req,res)=>{
    const {name,price,description}=req.body;
    try{
        const product=await collection.findOne({name:name})
        if(product){
            res.send("Product already exists");
        }else{
        const done=collection.insertOne({name,price,description});
        if(done){
            res.send('product added successfully');
        }else{
            res.send('error');
        }
        }
    }catch(err){
        console.log(err);
    }
}

const getProduct= (req,res)=>{
    try{
       collection.find({}).toArray(function(err, result) {
        if (err) throw err;
       res.send(result);
       });
    }catch(err){
        console.log(err);
    }
}

const getProductByName= (req,res)=>{
    const{name}=req.params;
    console.log(name);
    try{
        collection.findOne({name:name},function(err, result) {
        if (err) throw err;
       res.send(result);
       });
    }catch(err){
        console.log(err);
    }
}

const updateProduct= (req,res)=>{
    const {name,price,description}=req.body;
    try{
        const data ={name:name},value={$set:{name:name,price:price,description:description}};
       collection.updateOne( data,value,function(err, result) {
        if (err) throw err;
        res.send('data updated successful');
    })
    }catch(err){
        console.log(err);
    }
}



const deleteProduct= (req,res)=>{
    const {name}=req.body;
    try{
        collection.deleteOne({name:name},function(err, obj) {
        if (err) throw err;
            res.send('data deleted sucessful');
         });
    }catch(err){
        console.log(err);
    }
} 

module.exports={
    CreateProduct,
    getProduct,
    getProductByName,
    updateProduct,
    deleteProduct
}