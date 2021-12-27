npm i mongodb

Создаем кластер, получаем URL
В нем меняем пароль, который мы вводили при создании кластера. 
Указываем название БД, которое мы указывали при создании имени проекта

================================================================================================================
const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb+srv://bolocode:1q2w3e@cluster0.7bgk8.mongodb.net/mongodb?retryWrites=true&w=majority')

const start = async () => {
    try {
        await client.connect()
        console.log('Соединение установлено');
        await client.db().createCollection('users')                - создаем коллекцию
        const users = client.db().collection('users')              - вынесим коллекцию в отдельную переменную
        await users.insertOne({name: 'bolocode', age: 21})         - добавим одного пользователя
        const user = await users.findOne({name: 'bolocode'})       - получаем пользователя в отдельную переменную
        console.log(user);                                         - покажем в консоли
    } catch(e) {
        console.log(e);
    }
}

start()

================================================================================================================
terminal:
        Соединение установлено
        {
            _id: new ObjectId("6179461284b8f891254e9c3c"),
            name: 'bolocode',
            age: 21
        }
        
================================================================================================================