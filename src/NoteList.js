    import { Icon } from '@iconify/react';
    import { useState, useEffect } from 'react';
    import AddNote from './AddNote';
    import SearchNote from './SearchNote';
    import { nanoid } from 'nanoid';
    const NoteList = () => {
        const initialNotes = JSON.parse(localStorage.getItem('notes')) || [];
        const [notes, setNotes] = useState(initialNotes);
        // useEffect(() => {
        //     const savedNotes = JSON.parse(localStorage.getItem('notes'));
        //     if (savedNotes) {
        //         setNotes(savedNotes);
        //     }
        // }, []);

        useEffect(() => {
            localStorage.setItem('notes', JSON.stringify(notes));
        }, [notes]);
        
        const [searchNote, setSearchNote] = useState('');

        const addNewNote = (makeNewText) => {
            const newNote = {
                id: nanoid(),
                text: makeNewText,
                date: new Date().toLocaleDateString(),
            }
            setNotes([...notes, newNote]);
        }

        const handleDeleteNote = (id) => {
            const deleteNote = notes.filter((note) => note.id !== id);
            setNotes(deleteNote);
        }

        return (
            <>
                <SearchNote handleSearchNote={setSearchNote} />
                <div className="notes-list">
                    {notes && notes.filter((note) => searchNote ? note.text.toLowerCase().includes(searchNote.toLowerCase()) : true).map((note) => (
                        <div className="note" key={note.id}>
                            <p>{note.text}</p>
                            <div className="note-footer">
                                <small>{note.date}</small>
                                <Icon icon="mdi:delete-forever" className='delete-icon' onClick={() => handleDeleteNote(note.id)} />
                            </div>
                        </div>
                    ))}
                    <AddNote addNewNotes={addNewNote} />
                </div>
            </>
        )
    }

    export default NoteList