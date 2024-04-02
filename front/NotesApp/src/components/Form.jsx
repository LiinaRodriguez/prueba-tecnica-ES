import { useState } from "react"
import { postNote } from "../api/notes.api"
import './form.css'

export function Form({onLoadNotes}) {
    const [formData, setFormData] = useState({ title: '', description: '' })
    

    const handleInputChange = (e) => {
        const { value } = e.target;
        const numFilas = value.split('\n').length;
        e.target.rows = numFilas > 1 ? numFilas : 1;
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await postNote(formData)
            console.log('Nota creada', res.data)
            onLoadNotes();
            setFormData({ title: '', description: '' })
        } catch (error) {
            console.error('Error', error)
        }
       
    }


    return (
        <>
            <div  className="create-form">
                <form onSubmit={handleSubmit}>
                    <div className='form' >
                        <label id="title" htmlFor="title">
                            <input type="text" name='title' placeholder='Title' value={formData.title} onChange={handleInputChange} id='title'/>
                        </label>
                        <label htmlFor="description"></label>
                        <textarea name="description" value={formData.description} onChange={handleInputChange}  style={{resize:'none', outline:'none', border:'none', padding:'1em'}} placeholder="Write your note here" cols="30" rows='2' ></textarea>
                        <button className="btn-submit" type='submit'>
                            Guardar
                        </button>
                    </div>
                </form>
                {/* <button onClick={handleForm} className='addNote'>➕</button> */}
            </div>
        </>
    )
}