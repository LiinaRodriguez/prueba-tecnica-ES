// import { Form} from './Form';
import { CardList } from './CardList'
import { Form } from './Form'
import { getAllNotes } from '../api/notes.api';
import { useState } from 'react';
import { UpdateForm } from './UpdateForm';

export function Notes() {
    const [notes, setNotes] = useState();

    async function LoadNotes() {
        try {
            const res = await getAllNotes()
            //console.log(res)
            setNotes((res.data).reverse()) //Arreglar para mapear por fecha en el archivo cardlist.jsx o por orden alfabetico
        } catch (error) {
            console.error('Error', error)
        }
    }

  return (
    <>
      <div style={{alignItems:'center', flexDirection:'column', display:'flex'}} className="app">
        <Form onLoadNotes={LoadNotes} />
        <CardList notes={notes} onLoadNotes={LoadNotes} />
       </div>
    </>
  )
}







