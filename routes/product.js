const express=require('express');
const {CreateProduct,getProduct,getProductByName,updateProduct,deleteProduct}=require('../controller/prodCon');
const route=express.Router();

route.post('/create',CreateProduct);
route.get('/getProduct',getProduct);
route.get('/getProduct/:name',getProductByName);
route.patch('/update',updateProduct);
route.delete('/delete',deleteProduct);


module.exports={
    product:route
}