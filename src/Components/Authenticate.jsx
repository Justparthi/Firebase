import React, { useState } from 'react'
import { auth, googleProvider } from '../Config/firebase.js'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

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
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      console.error(err)
      
    }

  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
      
    }

  }

  // console.log(auth?.currentUser?.photoURL)



  return (
    <div>
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

        <button onClick={signInWithGoogle}>Sign IN with google</button>
        <button onClick={logout}>Log out</button>
    </div>
  )
}

export default Authenticate;
