const express = require('express');
const path = require('path');
//Respuesta en Consola -> morgan
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//importar rutas
const contactosRoutes = require('./routes/contactos');
const { urlencoded } = require('express');


// Settings
app.set('port', process.env.PORT || 5000 );
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user : 'root',
    password : 'Tecsup',
    port : 3306,
    database : 'laboratorio13'
}));

app.use(express.urlencoded({extended: false}));

//routes
app.use('/', contactosRoutes);

//documentos estaticos
app.use(express.static(path.join(__dirname,'public')));

//empezando servidor
app.listen(app.get('port'), () => {
    console.log('Server en puerto 5000');
});