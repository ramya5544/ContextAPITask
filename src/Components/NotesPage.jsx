import React, { useContext, useState } from 'react';
import { MyContext } from '../App';
import { faNoteSticky, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';



const NotesPage = () => {
    const [inptxt, setInptxt] = useState('')
    const [inptxt2, setInptxt2] = useState('')

    const { NoteValue, SetNoteValue, TaskValue, SetTaskValue } = useContext(MyContext);

    const handleChange = (e) => {


        setInptxt(e.target.value);



    }

    const handleChange2 = (e) => {


        setInptxt2(e.target.value);



    }

 const handleClick = () => {


        SetNoteValue(() => {


            let data = {
                id: uuidv4(),
                content1: inptxt,
                content2: inptxt2

            }

            console.log(NoteValue)
            console.log(data);
            return [...NoteValue, (data)]

        });

        setInptxt('')
        setInptxt2('')

    }

    const handleDelete = (id) => {


        SetNoteValue((NoteValue) => {
            console.log(id);

            const AfterDelete = NoteValue.filter((obj) => obj.id !== id)
            
            console.log(AfterDelete);               
            
            return AfterDelete;

        })
    }
return (
        <div className=' addnoteboxmain container-fluid mt-5'>
            <div className='addnotebox container-fluid '>

                <h1 >Add a Note</h1>

                <input className='addnotetxtbox' type="text" placeholder='Title' value={inptxt} onChange={handleChange} />

                <input type="text" placeholder='Take a note...' value={inptxt2} onChange={handleChange2} className='mt-2 addnotetxtbox2' />


                <div className='timeclickbox'>




                    <button className='addclick mt-3' onClick={handleClick}>Add</button>

                    <button className='remtime mt-5 mb-2'>updated 1 mins ago </button>





                </div>



            </div>

            <div className='display-container mt-5'>
                <h1 className='mynotes'> <FontAwesomeIcon icon={faNoteSticky}/> My Notes</h1>

                {NoteValue.length > 0 ? (
                    <div className="card-container horizontal-card-list mt-1">
                        {NoteValue.map((BoxVal) => (
                            <div key={BoxVal.id} className="card">
                                <div className="card-body">
                                    <h1 className='addnotetxt'> {BoxVal.content1}</h1>
                                    <div className='card-content'>
                                        <p className='addnotetxt'>  {BoxVal.content2}</p>

                                        <button className="deletebtn" onClick={() => { handleDelete(BoxVal.id) }}>
                                            <FontAwesomeIcon icon={faTrashCan} />   </button></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No notes added</div>
                )}
            </div>


        </div>
    );
};

export default NotesPage;