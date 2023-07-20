import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import { useEffect, useState } from "react";

const PORT = 8004
const URL = `http://localhost:${PORT}/comics`

function App() {
  
  const [comics, setComics] = useState([]);
  useEffect( () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => setComics(data))
    // .then(data => console.log(data))
  },[]);
  
  const [newComic,  setNewComic] = useState({})

  function handleSubmit (e) {
    e.preventDefault()
    //post to backend (fetch)
    fetch(URL, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComic)
    })
    //update frontent (usestate)
    setComics([...comics,newComic])

  };

  function handleChange (e) {
    // console.log(e.target.name)
    setNewComic({
      ...newComic,
       [e.target.name]: e.target.value
      
    })

  };

  function removeComic (comicToDelete) {
    const filteredArray = comics.filter((comic)=> comic.id !== comicToDelete.id)
    setComics(filteredArray)
  }

  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics} URL={URL} setComics={setComics} removeComic={removeComic} />
        </div>

        <div className="sidebar">
          <ComicForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>

      </div>


    </div>
  );
}

export default App;
