import React, { createContext, useState } from 'react';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faListCheck, faNoteSticky, faTrashCan, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes } from 'react-router-dom';
import TaskPage from './TaskPage';
import NotesPage from './Components/NotesPage';
import HomePage from './HomePage';

export const MyContext=createContext();
const App = () => {
const[NoteValue,SetNoteValue]=useState([]);
const [TaskValue, SetTaskValue] = useState([]);
  return (
    
      <div className=' mainbox contaiiner-fluid'>
            <div className='row'>

                <div className="col-3 sidebox  ">

                    <nav className='sidebarm  p-2  mlg' >
                        <div className='my-5 li  con user'>
                            <span className="my-5   fs-1    brand-name ">

                                <FontAwesomeIcon icon={faUser} />

                               </span>
                                </div>

                        <hr className="text dark " />
                        <div className="lsit-group list-group-flush lg ">
                            <div className="list1 ">  
                            <Link to="/" className=" fs-4  list-group-item  py2">


                                <AiFillHome/>         <span className='` d-none mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Home"}</span></Link>

                                <a href="" className="mt-5 fs-4   list-group-item  py2">
                                    <AiOutlineSearch/>
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Search"}</span></a>


                                <Link to="/NotesPage" className=" mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faNoteSticky} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-i nline' >{"Notes"}</span></Link>


                                <Link to="/TasksPage" className=" mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faListCheck} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{`Tasks`}</span></Link>

                                <a href="" className=" mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faBoxArchive} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Archive"}</span></a>

                                <a href="" className="mt-5 fs-4 list-group-item  py2">

                                    <FontAwesomeIcon icon={faTrashCan} />
                                    <span className='d-none fs-4  mx-3 d-md-inline d-sm-inline d-lg-inline d-xl-inline' >{"Bin"}</span></a>

                            </div>
                          </div>
                    </nav>



                </div>
             <div className='container-fluid notesmainbox  col-9 '>
              <MyContext.Provider value={{NoteValue,SetNoteValue,TaskValue,SetTaskValue}}>
                      <Routes>
                      <Route path='/' element={<HomePage/>}/>
                      <Route path ='/TaskPage' element={<TaskPage />}/>
                       <Route path='/NotesPage' element={<NotesPage />}/>
                      
                      
                      </Routes>
                    </MyContext.Provider>
                </div>
            </div>




        </div>
     

   
  );
};

export default App;