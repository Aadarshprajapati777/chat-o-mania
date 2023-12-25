import {Server} from 'socket.io';

class SocketService{
    private _io:Server;
    constructor(){
        console.log('SocketService constructor');
        this._io=new Server();
    }


    public initListeners(){
        console.log('SocketService initListeners');
        const io=this._io;
        io.on('connect',(socket)=>{
            console.log('Socket connected',socket.id);
            socket.on('disconnect',()=>{
                console.log('Socket disconnected',socket.id);
            });

            socket.on('event:message',async({message}:{message:string})=>{
                console.log('event:message',message);
            }
            );
        }
        );
}

    get io() {
        return this._io;
    }
}

export default SocketService;
