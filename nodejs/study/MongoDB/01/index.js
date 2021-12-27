const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb+srv://bolocode:1q2w3e@cluster0.7bgk8.mongodb.net/mongodb?retryWrites=true&w=majority')

const start = async () => {
    try {
        await client.connect()
        console.log('Соединение установлено');
        await client.db().createCollection('users')
        const users = client.db().collection('users')
        await users.insertOne({name: 'bolocode', age: 21})
        const user = await users.findOne({name: 'bolocode'})
        console.log(user);
    } catch(e) {
        console.log(e);
    }
}

start()

