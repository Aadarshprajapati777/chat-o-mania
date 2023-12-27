'use client'
import { useState } from "react";
import { useSocket } from "../context/SocketProvider"
import classes from "./page.module.css"
export default function Page() {

  const{sendMessage}=useSocket();
  const [messages,setMessages]=useState('')
  return (
    <div>
      <div>
        <h1>messages</h1>
      </div>
      <div>
        <input onChange={(e) => setMessages(e.target.value)} className={classes["chat-input"]} type="text"  placeholder="message"/>
        <button onClick={(e) => sendMessage(messages)}>send</button>
      </div>
    </div>
  )
}


