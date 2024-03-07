const { MongoClient } = require('mongodb');

let url = 'mongodb://localhost:27017/testdb';

async function connectToMongo() {
    const client = new MongoClient(url, {useNewURlParser: true, useUnifiedTopology: true});

    try{
    await client.connect();
    console.log("connect to mongoose")

    } catch(err) {
     console.log(`getting error while connect to db ${err}`)
    }
}

module.exports = {
    connectToMongo
}