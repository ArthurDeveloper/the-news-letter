import express from 'express';
import * as ejs from 'ejs';
import * as path from 'path';

import firebase from 'firebase';

import newsRouter from './routes/new-validation';

import newsApiRouter from './api/news';

const server = express();

const router = express.Router();

const PORT: string = process.env.PORT || '3000';

server.use(express.urlencoded({extended: true}))

server.use(express.static('public'));
server.set('views', path.join(__dirname.replace('\\src', ''), 'views'));
server.engine('view engine', ejs.renderFile);
server.set('view engine', 'ejs');

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/news', (req, res) => {
    res.render('news');
});

server.use('/api', newsApiRouter);
server.use('/', router);
server.use('/write-new', newsRouter);


server.listen(PORT, () => {
    console.log(`Running server in http://thenewsletter.herokuapp.com`);
});