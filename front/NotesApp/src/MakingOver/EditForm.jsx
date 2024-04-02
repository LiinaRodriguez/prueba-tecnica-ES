export function EditForm({ card }) {
  return (
    <>
      <div className="editForm">
        <form action="submit" method="put">
          <div className='form'>
            <label id="title" htmlFor="title">
              <input type="text" placeholder='Title' defaultValue={card.title} id='title' />
            </label>
            <label id='description' htmlFor="description">
              <input type="text" id='description' placeholder="Write your note here" defaultValue={card.description} />
            </label>
            <button className="btn-submit" type='submit'>
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
