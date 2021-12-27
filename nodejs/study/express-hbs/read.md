

--->    npm i express
--->    npm i mongoose
import, PORT, app.listen

Функция запуска внутри имеет коннект к бд,
ссылку на который мы берем при создании кластера
    БД:
        Создаем проект, называем, добавить доступ
        Создаем кластер, Коннект, Лог и пасс, add IP,
        create user, method App, copy path
И запуск сервера, с подключенной базой

async function start() {
try {
    await mongoose.connect('mongodb+srv://bolocode:1q2w3e@cluster0.ejdl8.mongodb.net/todos', {})
    app.listen...
} ...


handlebars - HTML движок :
--->    npm i express-handlebars


// Настройка конфигурации для шаблонозатора

import exphbs from 'express-handlebars';
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

// Регестрируем движок по ключу hbs
// Указываем, что по-умолчанию будем использовать handlebars - app.set('view engine', 'hbs')
// Указываем папку 'views', в которой будут храниться страницы сайта

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

Создаем views/index.hbs


Коннектимся на сайте и получаем линк, который записываем:
await mongoose.connect('mongodb+srv://bolocode:1q2w3e@cluster0.ejdl8.mongodb.net/todos', {})

Меняем пароль, удаляем query параметры и называем колекцию todos


Создаем router/todos.js и создадам router из Router
Напишем роуты
Экспортируем


В __dir/index.js ипортируем 
import todosRoutes from './routes/todos.js'

Метод use позволяет добавлять middlewares
Передаем в use:
app.use(todosRoutes)


Создаем views/layouts/main.hbs
Создаем views/partials/head.hbs
</head> пепеносим в head.hbs
В main.hbs подключаем его {{> head}} 

Синтаксис рендеринга:
{{{ body }}}

В head.hbs подключаем стили materialize.css
Для динамического <title>{{ title }}</title>


Создаем views/partials/navbar.hbs с двумя ссылками '/' и '/create'
Структура из materialize.css

Дописываем router для '/create' в todos.js
Создаем views/create.hbs


Для динамического title, в функцию reander вторым параметром 
мы передаем объект с данными, где будет наш title 

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Todos list',
        isIndex: true      - передаем флаг, по которому делаем подсвечиваем активную ссылку
    })
})

Синтаксис if/else 
По флагу isIndex добавляем active :
    {{#if isIndex}}
    <li class="active"><a href="/">Todos</a></li>
    {{else}}
    <li><a href="/">Todos</a></li>
    {{/if}}


Создаем модель, которая будет работать с todos
__dir/models/Todo.js
поле completed - если мы создали todo и она не завершена, значит false
Экспортируем

routes/todos.js
Импортируем нашу схему как Todo
Мы будем рендерить наш список todos на главной странице при рендере
Делаем асинхронную функцию, где мы делаем запрос к БД, чтоб получить все todos
И параметром передадим todos на страницу index.hbs

router.get('/', async (req, res) => {
    const todos = await Todo.find({}).lean()          !если не добавит lean() - не отображается текст
    res.render('index', {
        title: 'Todos list',
        isIndex: true,
        todos
    })
})

index.hbs
Делаем проверку массива #if todos.length
Итерируем {{#each todos}} 
            <li>...</li>
          {{/each}}

create.hbs
Создаем форму

todos.js
Создаем router.post(), где создаем объект todo,
в котором мы получаем title из req.body.title 
( поле title мы указывали в create.hbs <input type="text" name="title"> )


Для того, чтоб экспресс мог парсить body - нам нужно подключить middleware
index.js
app.use(express.urlencoded({extended: true}))


todos.js
Сохраняем    await todo.save()  в router.post('/create', ...)
И перенаправим на главную страницу после сохранения
res.redirect('/')


Добавим стили public/index.css
Допишем линк в partials/head.hbs

Добавим middleware, который покажет экспрессу правильный путь к стилям
Импортируем модуль path
Модульные импорты ES6 не имеют __dirname, потому мы делаем: (иначе: ReferenceError: __dirname is not defined in ES module scope )

        const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')))

index.hbs
Оборачиваем наш label в <form action="/complete" method="POST">


Чтоб определить какой todo мы изменяем - используем
<input type="hidden" value="{{_id}}" name="id">
Куда мы запишем ID

Создаем router.post('/complete', ...)
Где по ID находим нужный todo
Ставим флаг true
Сохраняем и перенаправляем

    router.post('/complete', async (req, res) => {
        const todo = await Todo.findById(req.body.id)

        todo.completed = true
        await todo.save()

        res.redirect('/')
    })

index.hbs 
Добавим для чекбоксов name="completed"
И поменяем в todos.js --->  todo.completed = true
на                          todo.completed = !!req.body.completed



        

