import express from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import __dirname from './util.js';
import viewsRouter from './routes/views.routes.js';

const app = express ();

app.use(express.static(`${__dirname}/public`)); //esto es para trabajar con public

app.engine('handlebars', handlebars.engine());//para trabajar con handlebars
app.set('views', `${__dirname}/views`);//handlebars va a estar trabajando con la carpeta de views
app.set('view engine', 'handlebars')


app.use('/', viewsRouter)//importa el routes, es desde donde lo voy a importargit

const server = app.listen(8081, ()=> console.log('server running'));
const io = new Server (server);