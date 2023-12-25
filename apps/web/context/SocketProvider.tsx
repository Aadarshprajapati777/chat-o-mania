'use client'

import React, { use, useCallback, useContext, useEffect } from "react"
import { io } from "socket.io-client"

interface SocketProviderProps {
    children?: React.ReactNode
}

interface ISocketContext {
    sendMessage: (message: string) => any;
}







const SocketContext = React.createContext<ISocketContext | null>(null);


export const useSocket = () => {
    const state= useContext(SocketContext);
    if (!state) throw new Error("SocketProvider not found");
    return state;
}


export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {

    const sendMessage: ISocketContext["sendMessage"] = useCallback((message) => {
        console.log("send message function",message)
    }
    ,[])

    useEffect(() => {
        const _socket = io("http://localhost:2500");
    
        return () => {
            _socket.disconnect();
        }
    }
    ,[])
    
    
    

    return (
        <SocketContext.Provider value={null}>
        {children}
        </SocketContext.Provider>
    )
    }


    
