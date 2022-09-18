const express=require('express');
const {CreateProduct,getProduct,getProductByName,updateProduct,deleteProduct}=require('../controller/prodCon');
const route=express.Router();

route.post('/create',CreateProduct);
route.get('/getProduct',getProduct);
route.get('/getProduct/:name',getProductByName);
route.patch('/update',updateProduct);
route.delete('/delete',deleteProduct);
route.get('*',(req,res)=>{
    res.send('Hi this is my Mongodb CRUD');
})

module.exports={
    product:route
}