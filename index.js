const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://<username>:<password>@cluster0.or5hopv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


app.get('/', async (req, res) => {
    res.send('My task app is running')
})

app.listen(port, () => console.log(`My task app running on ${port}`))