import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {SearchOutlined, AttachFile,InsertEmoticon, Mic, MoreVert} from '@material-ui/icons'
import './chat.css'
import db from './firebase'
const Chat = () => {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('')
    const {roomId} = useParams()
    const [roomName, setRoomName] = useState('')


    useEffect(()=>{
        if (roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot =>
             (
                setRoomName(snapshot.data().name)
            ))
        }
    })

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    }, [roomId])

        const sendMessage =(e)=> {
            e.preventDefault()
            console.log('you type >>>' + input)
            setInput('')
        }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt=" "/>
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>last seen at ...</p>
            </div>
            <div className="chat__headerRight">
            <IconButton>
                <SearchOutlined/>
            </IconButton>
            <IconButton>
                <AttachFile/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
            </div>
            </div>
            <div className="chat__body">
           
                <p className={`chat__message ${true && "chat__messageReciever"} `}>
                <span className='chat__name'>elias hezron</span>hey guys
                <span className='chat__timeStamp'>6:31 am</span>
                </p>
            
            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form className='chat__footerForm'>
                <input value={input} onChange={e=>setInput(e.target.value)}
                placeholder='type a message' type='text'/>
                <button onClick={sendMessage} type='submit'>Send a Message</button>
                </form>
                <Mic/>
                
            </div>
        </div>
    )
}

export default Chat
