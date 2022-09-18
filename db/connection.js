const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.URL);
const con=async ()=>{
  try{
    await client.connect();
    if(client)console.log('db connected');
    else console.log(err);
  }catch(err){
    console.log(err);
  }
}

const collection = client.db('Products').collection('Product');

 

module.exports={
 con,
 collection
}