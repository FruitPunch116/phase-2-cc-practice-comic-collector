import { useState } from "react"

function Comic({ comic, URL, removeComic }) {
  const [image, setImage] = useState(true)

  function handleDelete () {
    fetch(`${URL}/${comic.id}`, {method: "DELETE"})
    removeComic(comic)
  }

  return (
    <div className="comic-item" onClick={()=>setImage(!image)}>

      {image ? <img src={comic.image_url} alt={comic.issue} /> :
        <>
          <h3>{comic.title}</h3>
          <h4>{comic.issue}</h4>
          <button onClick={handleDelete}>Remove</button>
        </>}
    </div>
  )

}

export default Comic
