import { Avatar } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../firebase'
import './sidebarchat.css'

const SidebarChat = ({id, name, addNewChat}) => {
    const [seed, setSeed] = useState('')
    useEffect(() => {
       setSeed(Math.floor(Math.random()*5000))
      
    }, [])
        const createChat=()=>{
            const roomName = prompt("Please enter name for chat")
            
            if (roomName){
                // do some clever database stuff...
                const unsubscribe = db.collection('rooms').add({
                    name: roomName,
                })
                return ()=>{
                    unsubscribe()
                }
            }
        }


    return !addNewChat ? (
        <Link to= {`/rooms/${id}`}>
        <div className='sidebarchat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt=" "/>
            <div className="sidebarchat__info">
                <h2>{name}</h2>
                <p>Last message</p>
            </div>
        </div>
        </Link>
    ):(
        <div onClick={createChat}
        className="sidebarchat">
        <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
