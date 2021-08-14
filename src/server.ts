import express from 'express';
import * as ejs from 'ejs';
import * as path from 'path';
import cors from 'cors';

import firebase from 'firebase';
import './firebase-setup';

import newValidationRouter from './routes/new-validation';
import newsRouter from './routes/news';
import newsApiRouter from './api/news';

const server = express();

const router = express.Router();

const PORT: string = process.env.PORT || '3000';

server.use(express.urlencoded({extended: true}))
server.use(cors());

server.use(express.static('public'));
                                                                // Faz com que isso funcione em computadores windows e linux/mac
server.set('views', path.join(__dirname.indexOf('/src') != -1 ? __dirname.replace('/src', '') :
                                                                __dirname.replace('\\src', ''), 'views'));
server.engine('view engine', ejs.renderFile);
server.set('view engine', 'ejs');

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/news', (req, res) => {
    res.render('news');
});

server.use('/', router);
server.use('/api', newsApiRouter);
server.use('/write-new', newValidationRouter);
server.use('/new', newsRouter);


server.listen(PORT, () => {
    console.log(`Running server in https://the-news-letter.herokuapp.com`);
});