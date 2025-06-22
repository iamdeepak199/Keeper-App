import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/notes")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
      });
  }, []);

  function addNote(newNote) {
    axios
      .post("http://localhost:5000/notes", newNote)
      .then((res) => {
        setNotes((prevNotes) => [...prevNotes, res.data]);
      })
      .catch((err) => {
        console.error("Error adding note:", err);
      });
  }

  function deleteNote(id) {
    axios
      .delete(`http://localhost:5000/notes/${id}`)
      .then(() => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting note:", err);
      });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
