
import './card.css'
import { MdOutlineDeleteOutline } from "react-icons/md";

export function Card({ note, onHandleDelete, onHandleCard}) {

    return (
        <>
            <div className="card-content">
                <div className="note-content ">
                    <h4 className='title' onClick={()=>onHandleCard(note)} >{note.title}</h4> 
                    <p>{ note.description}</p>
                </div>
                <div className="card-buttons">
                    <button onClick={() => onHandleDelete(note)} className='del-btn'>
                        <MdOutlineDeleteOutline size={20} />
                    </button>
                </div>
            </div>
        </>
    )
}
