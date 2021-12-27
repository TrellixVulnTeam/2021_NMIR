import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import exphbs from 'express-handlebars';
import todosRoutes from './routes/todos.js'

const PORT = process.env.PORT || 3000

const __dirname = path.resolve();

const app = express()
// Настройка конфигурации для шаблонозатора
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todosRoutes)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://bolocode:1q2w3e@cluster0.ejdl8.mongodb.net/todos', {})

        app.listen(PORT, () => {
            console.log(`Server has been started on PORT: ${PORT}`);
        })
    } catch(e) {
        console.log(e);
    }
}

start()

