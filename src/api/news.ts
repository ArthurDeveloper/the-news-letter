import { Router, Request, Response } from 'express';
import firebase from 'firebase';

const router = Router();

const database = firebase.database();

router.get('/news', async (req: Request, res: Response) => {

    const responseData = await firebase.database().ref(`news`).get()
        .then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            }
        });

    res.json(responseData);

});

router.get('/news/:id', async (req: Request, res: Response) => {
    
    const id = req.params.id;

    const responseData = await firebase.database().ref(`news/${id}`).get()
        .then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            }
        });

    res.json(responseData);

});

export default router;