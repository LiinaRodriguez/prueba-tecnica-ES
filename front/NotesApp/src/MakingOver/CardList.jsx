import { useEffect, useState } from "react";
import { getAllNotes } from "../api/notes.api";
import '../card.css'


export function CardList({onHandleCard }) {

  const [notes, setNotes] = useState();

  useEffect(() => {
    console.log('Página cargada')
    async function loadNotes() {
      try {
        const res = await getAllNotes()
        console.log(res)
        setNotes(res.data)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }  
    }
      loadNotes();
  }, [])
  
  const cardCollection = notes?.map((card, index) => (
  
      <div onClick={() => onHandleCard(card)}
        className='card card-content' key={index}>
          <h4>{card.title}</h4>
          <p>{card.description}</p>
      </div> 
    ));

  return (
    <>
      {cardCollection}
    </>
  );
}


// function Card({ card}) {
//   return (
//     <>
//       <div className="card ">
//         <h4>{ card.title}</h4>
//         <p>{ card.description}</p>
//      </div>
     
//     </>
//   )
// }


// function Button() {
//   return (
//     <>
//       <div className='btn-delete'>
//         <span>❌</span>
//      </div>
//     </>
//   )
// }