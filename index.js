const express = require('express')
const app=express();
require('dotenv').config();
const {con}=require('./db/connection');
const {product}=require('./routes/product');
app.use(express.json());

con();
app.use(product);
app.listen(process.env.PORT, async ()=> {
	console.log('server is running on this port',process.env.PORT);
})