import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes]= useState([])
   
  function addNote(newNotes){
    setNotes(prevNote =>{
      return [...prevNote,newNotes]
    })
   
  }

  function deleteNotes(id){  
    setNotes(prevNote =>{
      return  prevNote.filter((noteItems,index)=>{
        return index !==id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote} />
      {notes.map((noteItems,index) =>{
      return <Note
      key={index}
      id={index}
      title={noteItems.title}
      content={noteItems.content}
      onDelete={deleteNotes}
       />; 
       })}
      
      <Footer />
    </div>
  );
}

export default App;
