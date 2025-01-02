import React, { useState, useEffect } from "react";

const Notepad = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");

  // Load notes from localStorage when the app starts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever the notes array changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = () => {
    if (currentNote.trim()) {
      setNotes([...notes, currentNote]);
      setCurrentNote("");
    }
  };

  // Delete a note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        📝 Notepad
      </h1>
      <textarea
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        placeholder="Write your note here..."
        className="w-full h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      />
      <button
        onClick={addNote}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add Note
      </button>

      <div className="mt-6 space-y-4">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md"
            >
              <p className="text-gray-700">{note}</p>
              <button
                onClick={() => deleteNote(index)}
                className="text-red-500 hover:text-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No notes yet!</p>
        )}
      </div>
    </div>
  );
};

export default Notepad;
