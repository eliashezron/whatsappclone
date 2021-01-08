import React from 'react'
import './login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes} from './reducer'

const Login = () => {
    // eslint-disable-next-line 
    const [{},
          dispatch] = useStateValue()


    const signIn = () =>{
       auth
       .signInWithPopup(provider)
       .then((result) =>{
         dispatch({
             type: actionTypes.SET_USER,
             user: result.user,
         })
       
    })
       .catch((error) => alert(error.message))
    }
 
    return (
        <div className='login'>
            <div className="login__container">
            <img src="https://img.icons8.com/cute-clipart/64/000000/whatsapp.png" alt="" />
                <div>
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type='submit' onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
