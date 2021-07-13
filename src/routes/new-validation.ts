import {Router, Request, Response} from 'express';
import firebase from 'firebase';

const router = Router();
// Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAJJo3UyA3bMeGVN-HA2AvgVMqnQn_-xU0",
    authDomain: "portal-de-noticias-5bc02.firebaseapp.com",
    databaseURL: "https://portal-de-noticias-5bc02-default-rtdb.firebaseio.com",
    projectId: "portal-de-noticias-5bc02",
    storageBucket: "portal-de-noticias-5bc02.appspot.com",
    messagingSenderId: "442099286532",
    appId: "1:442099286532:web:e2c2fcef1419c007416b51",
    measurementId: "G-R2M64YH0WB"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


router.get('/', (req: Request, res: Response) => {
    res.render('write-new', {error: null});
});

router.post('/', async (req: Request, res: Response) => {

    let newsQtt: number = await firebase.database().ref('/news/').get().then((snapshot) => {
        if (snapshot.val()) {
            return Object.keys(snapshot.val()).length || 0;
        }
    });

    let id: number = newsQtt;

    let newAlreadyExists: boolean;

    firebase.database().ref('news').on('value', 
                                    (data) => {
                                        let news = data.val();
                                        news = Object.values(news);
                                        console.log(news);
                                        for (let curNew of news) {
                                            if (curNew.title === req.body.newTitle.trimStart() &&
                                                curNew.content === req.body.newContent.trimStart()) {
                                                newAlreadyExists = true;
                                            }
                                        }
                                    },
                                    (error) => {
                                        console.log(`Error! ${error}`)
                                    })

    if (newAlreadyExists) {
        res.render('write-new', {error: 'Esta notícia já existe!'});
        return;
    }

    if (req.method === 'POST') {
        firebase.database().ref(`news/${id}`).set({
            title: req.body.newTitle.trimStart(),
            content: req.body.newContent.trimStart()
        });
    }

    res.render('new-validation-response');

});


export default router;