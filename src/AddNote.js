    import { useState } from "react";

    const AddNote = ({ addNewNotes }) => {
        const [text, setText] = useState('');
        const limitText = 200;

        const handleNewNote = (e) => {
            setText(e.target.value)
        }

        const handleSubmitNewNote = (e) => {
            e.preventDefault();
            if (text.trim() === '') {
                return; // Jangan tambahkan catatan kosong
            }

            // Panggil fungsi addNewNotes untuk menambahkan catatan baru
            addNewNotes(text);
            setText('');
        }

        return (
            <div className="note new">
                <form onSubmit={handleSubmitNewNote}>
                    <textarea
                        rows="10"
                        value={text}
                        onChange={handleNewNote}
                        placeholder="tulis note baru disini...">
                    </textarea>
                    <div className="note-footer">
                        <small>{ limitText - text.length } Karakter lagi</small>
                        <button className="save" type="submit">Simpan</button>
                    </div>
                </form>
            </div>
        )
    }

    export default AddNote;