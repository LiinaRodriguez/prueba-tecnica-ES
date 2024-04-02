import './updateForm.css'
import { MdClose } from "react-icons/md";
import { useState } from "react"
import {updateNote} from '../api/notes.api';

export function UpdateForm({ onLoadNotes, note, onHandleIsOpen, isOpen }) {

    const [formData, setFormData] = useState({ title: note.title, description: note.description })

    const handleInputChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target; // Obtener el nombre y el valor del campo de entrada
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        console.log(formData)
        try {
            const res = await updateNote(note?.id, formData)
            console.log('Nota actualizada', res.data)
            onLoadNotes();
            closeModal()
            setFormData({ title: '', description: '' })

        } catch (error) {
            console.error('Error', error)
        }
    }

    function closeModal() {
        onHandleIsOpen()
    }

    return (
        <>
            <div className="update-content" style={isOpen ? {visibility:'visible'}: {visibility:'hidden'}}>
                <button className='close-btn' onClick={closeModal} type="button"><MdClose size={20} /></button>
                <div className="form-content update-form">
                    <form onSubmit={handleSubmit} >
                    <label  htmlFor="title">
                        <input type="text" id='title' name='title' placeholder='title'  onChange={handleInputChange} defaultValue={note.title} />
                    </label>
                        <label  htmlFor="description" ></label>
                        <textarea name="description" onChange={handleInputChange} style={{resize:'none', outline:'none', border:'none', padding:'1em'}} placeholder="Write your note here" cols="90" rows='7' defaultValue={note.description} ></textarea>
                        <button className="btn-submit" type='submit' onClick={closeModal}>
                            Guardar
                        </button>
                </form>
                </div>
            </div>
        </>
    )
} 