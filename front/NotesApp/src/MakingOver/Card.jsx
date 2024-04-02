import { useState } from 'react';
import '.././card.css'
import { EditForm } from './EditForm';
import {CardList} from './CardList'

export function Card() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false)

  const handleCard = (card) => { 
    setSelectedCard(card)
    setIsOpen(true)
   // OpenModal(card)
  }

  function handleIsOpen() {
    setSelectedCard(null);
    setIsOpen(false);
  }

  return (
    <>
      <div className='card-collection' style={ isOpen ? { opacity: 0.3 } : { opacity: 1 }}>
          <CardList onHandleCard={handleCard} />
        </div>
      { isOpen &&
       <div>
       <button onClick={handleIsOpen}> ✖ cerrar</button>

       <EditForm card={selectedCard} />
     </div>
      }
    </>
  );
}

// function Button() {
//   return (
//     <>
//       <div className='btn-delete'>
//         <span>❌</span>
//      </div>
//     </>
//   )
// }

