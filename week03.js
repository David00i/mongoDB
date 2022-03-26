const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.te4xf.mongodb.net/Sandbox?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
    if (err) {
        console.log(err.message)
        return
    }
console.log('Connected to MongoDB\n');

//1_CREATE 
//then function
//client.db('week03').collection('customers').insertOne({
//    name:'Zenfolio',
//    age: 42,
//    address: {
//        street: '123 Main Street',
//        city: 'New York',
//        state: 'NY',
//        zip: 14000
//    },
//    isActive: true,
//    tags: ['tag1','tag2'],
//}),then(result => {
//    console.log(result);
//});

//async & await (avoid nested in then function)
console.time('insert used time')
let result1 = await client.db('week03').collection('customers').insertOne({
    name:'John',
    age: 30,
    location: 'New York',
    isActive: true,
    tags: ['tag1','tag2'],
})
console.timeEnd('insert used time')
console.log('Inserted document', result1)
console.log('completed CREATE\n')

//2_READ
//client.db('sample_training').collection('zips').find({ 'state' : 'NY' }).toArray().then(result => {
//    console.log(result);
//})

//3_UPDATE
console.time('update used time')
let result2 = await client.db('week03').collection('customers').updateMany(
    { name: 'utem'},
    { $set: {address: 'Zenfolio Inc'} },
    { upsert: true}
)
console.timeEnd('update used time')
console.log('Updated document', result1)
console.log('completed UPDATE\n')

//4_DELETE
console.time('delete used time')
let result3 = await client.db('week03').collection('customers').deleteMany(
    { name: 'John'}
    //_id: ObjectId('123456')
)
console.timeEnd('delete used time')
console.log('Deleted document', result3)
console.log('completed DELETE\n')
});
