import { Router, Request, Response } from 'express';
import Server from '../classes/server';

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        msj: 'todo esta bien',
    })

})

router.post('/mensajes', (req: Request, res: Response) => {
    // console.log(req.body);
    const { cuerpo, de } = req.body;

    const payload = {
        de: de,
        cuerpo: cuerpo,
    }

    const server = Server.instance;

    server.io.emit('chat-new', payload );

    res.json({
        ok: true,
        cuerpo: cuerpo,
        de: de,
        msj: 'POST - listo!!!',
    })

})

router.post('/mensajes/:id', (req: Request, res: Response) => {
    // console.log(req.body);
    const { cuerpo, de } = req.body;
    const id = req.params.id;

    const payload = {
        de: de,
        cuerpo: cuerpo,
    };

    const server = Server.instance;

    server.io.in(id).emit('chat-private', payload );

    res.json({
        ok: true,
        cuerpo: cuerpo,
        de: de,
        msj: 'POST - listo!!!',
        id: id,
    })


})

export default router;