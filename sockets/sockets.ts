import { Socket } from "socket.io";
import socketIO from 'socket.io';

export const desconectar = (cliente: Socket) => {

    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');        
    });
}

export const mensaje = (client: Socket, io: socketIO.Server ) => {

    client.on('chat', ( payload ) => {
        console.log(payload);

        io.emit('chat-new', payload);
    });
}