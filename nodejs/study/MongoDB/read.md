
MongoDB

- download MongoDB Community Server
https://www.mongodb.com/try/download/community

В приложении:
- connect

================================================================================================================

* terminal MongoSH :

show databeses;                     - показать БД

use mongo;                          - ипользовать БД
                                    Если нету БД с таким названием - создаст ее

db.createCollection('users')        - создать коллекцию

show collections                    - посмотреть колекции через консоль

db.dropDatabase()                   - удалить БД

db.users.insertOne({                - добавить документ в коллекцию
    name: "bolocode",                       db.users.insertMany
    age: 29
})          

db.users.inserMany([                - добавить документ в коллекцию
    {name: "vasya", age: 22},
    {name: "petya", age: 24},   
    {name: "dima", age: 26},  
    {name: "anton", age: 28},                  
])    

db.users.find()                     - запрос на получение пользователя
                                    запрос без параметров вернет весь список users

db.users.find({age: 22})            - вернет объект, у которого age 22
                                    можно указать несколько критериев. Ничего не вернет, если хоть
                                    один из критериев не совпадает

db.users.find({$or:[{name: "vasya}, {age: 28}]})    - СИНТАКСИС как найти по одному из критерией (или)
                                                    вернет {name: "vasya", age: 22}, {name: "anton", age: 28}, 

db.users.find({age: {$lt: 25}})       - less than 25
db.users.find({age: {$lte: 25}})      - less than or equal 25
db.users.find({age: {$gt: 25}})       - greater than 25
db.users.find({age: {$lte: 25}})      - greater than or equal 25

db.users.find({age: {$lte: 25}})      - not equals (не равен условию)

db.users.find().sort({age: 1})        - 1, если хотим отсортировать в прямом порядке
                                        -1, если хотим отсортировать в обратном порядке

db.users.find().limit(2)              - лимитируем количество получаемых записей

db.users.distict()                    - вернет только уникальные записи

db.users.findOne
db.users.findOneAndDelete
db.users.findOneAndReplace
db.users.findOneAndUpdate


db.users.updateOne(                      - обновляем объект
    {name: "vasya"},                  - первый пар-р - объект, который надо найти и заменить(заменит всем,у кого -> name: "vasya")
    {                                 - второй пап-р - объект с $set:{... с данными, на которые нужно заменить
        $set: {
            name: "ilon mask,
            age: 45
        }
    }
)
        
db.users.updateMany(                    - применяем обновление к множеству
    {},                                 - если критерий путой, обновляем все записи
    {                                   - $rename переиминовует ключ name на fullname
        $rename: {  
            name: "fullname"
        } 
    }


db.users.deleteOne({age: 24})           - удаляем один объект с age: 24

db.users.bulkWrite([                    - позволяет делает несколько операций одновременно
    {
        insertOne: {                                - добавляем пользователя
            document: {name: "nastya", age: 18}
        }
    },
    {
        deleteOne: {                                - удаляем пользователя 
            filter: {name: "petya"}                 
        }
    }
])


================================================================================================================
ТИП СВЯЗЕЙ

- - - - Один ко многим - - - -
(один пользователь может иметь несколько постов, в то время как несколько постов могут пренадлежать только одному пользователю)

db.users.update(                          - добавляем к объекту name: "petya"
    {name: "petya"},                       поле posts, которое имеет массив постов
    {
        $set: {
            posts: [
                {title: "javascript", text: "js top"},
                {title: "mongo", text: "mongo database"},
            ]
        }
    }
)

Примеры запросов:

db.users.findOne(                           - указываем объект у которого хотим найти 
    {name: "petya"},                        - указываем posts: 1, и мы получим только id и массив с постами
    {posts: 1}
)

db.users.find(                              - ищем пользователя, у которого в posts есть пост с title: "javascript"
    {
        posts: {
            $elemMatch: {
                title: "javascript"
            }
        }
    }
)

db.users.find({posts: {$exists: true}})      - ищем пользователя, у которого есть поле posts



================================================================================================================

npm i mongodb

Создаем кластер, получаем URL

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

================================================================================================================

Получить количество документов в коллекции:

async function start() {
    await client.connect()

    const collection = db.collection('users')
    collection.countDocuments(function(err, result) {
    if(err) {
        return console.log(err);
    })
    console.log(`Количество документов в коллекции : ${result}`);
    
    })
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        })
    } catch(e) {
        console.log('ERROR -->', e);
    }
}

================================================================================================================

Получаем ссылку на локальную переменную приложения app.local.collections
Чтоб получить доступ в любом месте приложения:

app.locals.collection = client.db('users').collection('users')