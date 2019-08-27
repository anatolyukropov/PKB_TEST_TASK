const express       = require('express'),
    bodyParser      = require('body-parser'),
    path            = require('path'),
    cors            = require('cors'),
    cookieParser    = require('cookie-parser'),
    app             = express();                              //инизиализируем экспресс

require('dotenv').config({path : './.env'}); // подключаем перемынные .env

// Json body Middleware
app.use(bodyParser.json());

// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

// парсер cookie
app.use(cookieParser());

app.use(cors({
    origin:['http://localhost:8080'],
    methods:["GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"],
    credentials: true,
    preflightContinue : true// enable set cookie
}));

// Указывает директирою с общими файлами
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('/public/index.html')
});

const person = require('./controllers/personController');
const debt = require('./controllers/debt');
const portfolio = require('./controllers/portfolio');
const calendar = require('./controllers/calendar');
const payment = require('./controllers/payment');

app.use('/api/person', person);
app.use('/api/debt', debt);
app.use('/api/portfolio', portfolio);
app.use('/api/calendar', calendar);
app.use('/api/payment', payment);

const PORT = process.env.PORT || 5000;

//синхронизируем sequalize и запускаем сервер
app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
});

