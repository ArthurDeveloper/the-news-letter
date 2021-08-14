import { Router, Request, Response } from 'express';
import firebase from 'firebase';

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const requestedNew = await firebase.database().ref(`/news/${id}`).get()
                            .then((snapshot) => {
                                return snapshot.val();
                            });

    if (requestedNew === null) {
        res.status(404);
        res.render('404');
        return;
    }

    res.render('new', {title: requestedNew.title, content: requestedNew.content});
});

export default router;