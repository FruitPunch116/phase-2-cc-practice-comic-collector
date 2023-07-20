function ComicForm({ handleSubmit, handleChange }) {
  return (

    <form className="comic-form" onSubmit={handleSubmit} >

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url" onChange={handleChange}/>

      <label htmlFor="title">Title: </label>
      <input name="title" onChange={handleChange} />

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" onChange={handleChange} />

      <label htmlFor="description">Description: </label>
      <input name="description" onChange={handleChange} />

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
