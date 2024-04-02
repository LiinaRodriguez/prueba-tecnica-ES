import { useEffect, useState } from 'react';
import { Card } from './Card'
import { deleteNote, getByID } from '../api/notes.api'
import './card.css'
import { UpdateForm } from './UpdateForm';

export function CardList({ onLoadNotes, notes }) {
    const [selectedNote, setSelectedNote] = useState({ title: '', description: '' })
    const [isOpen, setIsOpen] = useState(false)
    const [isLoadingNote, setIsLoadingNote] = useState(false);

    function handleIsOpen() {
        setIsOpen(false);
      }

    useEffect(() => {
        onLoadNotes();
    }, [])

    useEffect(() => {
        if (selectedNote.title !== '') {
            
            setIsLoadingNote(false);
            if (isLoadingNote) {
                setIsOpen(true)
            }
        }

    }, [selectedNote]);
    
    async function handleDelete(note) {
        console.log(note.id)

        try {
            const res = await deleteNote(note.id)
            console.log(note.id)
            console.log("Nota eliminada", res)
            onLoadNotes();
        } catch (error) {
            console.error('Error', error)
        }
    }
   
    const handleCard = async (note) => {
        try {
            console.log(selectedNote)
            setIsLoadingNote(true);
            if (note?.id) {
                const res = await getByID(note.id);
                setSelectedNote(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    
    }
    return (
        <>
            <div className="card-collection">
            {
                notes?.map((note, index) => (
                    <div key={index}  className="card ">
                        <Card onHandleCard={handleCard} onHandleDelete={handleDelete} note={note} />
                    </div>
                ))
                }
                
            </div>
        
              
            {isLoadingNote && <div>Loading...</div>}
            {!isLoadingNote && 
                <UpdateForm isOpen={isOpen} onHandleIsOpen={handleIsOpen} onLoadNotes={onLoadNotes} note={selectedNote}/>
            }
        </>
    )
}

