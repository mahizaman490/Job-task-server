const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;






// Username
// mahizaman490
// Password
// vJVTqd3OX5Ffq331

















app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sjpq5n9.mongodb.net/your-database?retryWrites=true&w=majority`;

console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

const taskCollection = client.db('taskDB').collection('task')


app.get('/task',async(req,res)=>{
  const cursor = taskCollection.find();
  const result = await cursor.toArray();
  res.send(result)
})








    app.post('/task',async(req,res)=>{
      const newProduct = req.body;
      console.log(newProduct);
      const result = await taskCollection.insertOne(newProduct);
      res.send(result);
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);














app.get('/',(req,res)=>{
    res.send('simple crud is running')
})

app.listen(port,()=>{


console.log(`simple crud is running, ${port}`);



})