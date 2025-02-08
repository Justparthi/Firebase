import React, { useState } from 'react'
import { auth } from '../Config/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Authenticate = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err)
      
    }

  }


  return (
    <div>
      Authenticate Components
        <input 
        placeholder='email..........'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        type='password'
        placeholder='password............'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' onClick={signIn}>sign in</button>


    </div>
  )
}

export default Authenticate;
