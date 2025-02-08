import React, { useEffect, useState } from 'react'
import Authenticate from './Components/Authenticate.jsx'
import { db } from './Config/firebase.js';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import './App.css'


const App = () => {

  const [ movieList, setMovieList ] = useState([]);
  const [newMovieTitle, setNewMovieTitle] = useState('');
  const [ newReleasseDate, setNewReleaseDate ] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(true);

  const movieCollectionRef = collection(db, "Movies")


  const getMovieList = async () => {
    try {
      const data = await getDocs(movieCollectionRef);

      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filterData);
    } catch (err) {
      console.error(err)
      
    }

  }

  const deleteMovie = async (id) => {

    const movieDoc = doc(db, "Movies", id)
    await deleteDoc(movieDoc);

  }

  useEffect(() => {
    getMovieList()
  }, [])

  const onSubmitMovie = async () => {
    try {
      await addDoc(movieCollectionRef, {
        Title : newMovieTitle,
        Year : newReleasseDate,
        Oscar : isNewMovieOscar
      })

      getMovieList()
    } catch (err) {
      console.error(err)
      
    }
  }


  console.log("App component rendered"); 
  return (
    <div>
      <Authenticate /> 

<br /><br />
      <div>
         <input 
         type="text" 
         placeholder='Movie Title ....'
         onChange={(e) => setNewMovieTitle(e.target.value)}
         /> 
         <input 
         type="number" 
         placeholder='Year Of Release'
         onChange={(e) => setNewReleaseDate(Number(e.target.value))}
         />
         <input
         
         type="checkbox"
         checked={isNewMovieOscar}
         onChange={(e) => setIsNewMovieOscar(e.target.checked)}
         />
         <label >Received Oscar </label>
         <button onClick={onSubmitMovie}>Submit</button>
        </div> 
      
      <div>
        {movieList.map((movie) => (
          <div>
            <h1 style={{ color: movie.Oscar ? "green" : "red" }}> {movie.Title} </h1>
            <p> {movie.Year} </p>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>



          </div>
        ))}
      </div>

    </div>
  )
}

export default App