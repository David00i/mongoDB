const { MongoClient, ServerApiVersion} = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.te4xf.mongodb.net/Sandbox?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
    if (err) {
        console.log(err.message)
        return
    }
console.log('Connected to MongoDB\n');

let faker = require('./faker.js');
let hash = require('./hash.js');

//async & await (avoid nested in then function)
console.time('\nInsert used time')
let result = await client.db('homework').collection('fake user').insertOne({
    name: faker.randomName,
    email: faker.randomEmail,
    phone: faker.randomPhoneNumber,
    hash_password: hash.convert
})
console.timeEnd('\nInsert used time')
console.log('Inserted document', result)
console.log('completed CREATE\n')

//2_READ
// client.db('homework').collection('fake user').find({ 'name' : 'Ken Keeling' }).toArray().then(result => {
//    console.log(result);
// })

//3_DELETE
// client.db('homework').collection('fake user').drop();
// console.log('completed delete collection\n')
});