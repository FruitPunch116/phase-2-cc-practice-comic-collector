import Comic from "./Comic"

function ComicsContainer({ comics, URL, removeComic }) {

  // console.log(comics)
  return (
    <div className="flex-container">
      {comics.map((comic) => {
        return <Comic comic={comic} key={comic.id} URL={URL} removeComic={removeComic} />
      })}
    </div>
  )

}

export default ComicsContainer
