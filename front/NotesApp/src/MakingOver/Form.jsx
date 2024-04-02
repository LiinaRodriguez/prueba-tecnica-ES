import { useState } from 'react';
import '.././form.css'
import { postNote } from '../api/notes.api';
// import {loadNotes} from './CardList'

export function Form() {

  const [formData, setFormData] = useState({title:'', description: ''})

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = postNote(formData)
      console.log('Nota creada:', res.data);
      // loadNotes();
      setFormData({ title: '', description: '' });
    } catch(error) {
      console.error('Error al crear la nota:', error);
    }
  }

  return (
    <>
      <div className="create-form">
      <form onSubmit={handleSubmit}>
        <div className='form' >
          <label id="title" htmlFor="title">
            <input type="text" name='title' placeholder='Title' value={formData.title} onChange={handleInputChange} id='title'/>
          </label>
          <label id='description' htmlFor="description">
           <input type="text" name='description' id='description' value={formData.description} onChange={handleInputChange} placeholder="Write your note here"/>
          </label>
          <button className="btn-submit" type='submit'>
            Guardar
          </button>
        </div>
      </form>
      <button className='addNote'>
        ➕
        </button>
      </div>
    </>
  );
}
