import React, { useEffect, useState } from 'react'
import Authenticate from './Components/Authenticate.jsx'
import { db } from './Config/firebase.js';
import { getDocs, collection } from 'firebase/firestore';


const App = () => {

  const [ movieList, setMovieList ] = useState([]);

  const movieCollectionRef = collection(db, "Movies")

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(movieCollectionRef);
 
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filterData);
      } catch (err) {
        console.error(err)
        
      }

    }
    getMovieList()
  }, [])



  console.log("App component rendered"); 
  return (
    <div>
      Authenticate page
      <Authenticate />  

    </div>
  )
}

export default App