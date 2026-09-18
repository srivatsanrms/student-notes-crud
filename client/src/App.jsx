import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const API_URL = "http://localhost:8000/api/notes";

function App() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await axios.get(API_URL);
            setNotes(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title.trim() || !content.trim()) {
            return;
        }

        try {
            const response = await axios.post(API_URL, {
                title,
                content
            });

            setNotes((currentNotes) => [
                response.data,
                ...currentNotes
            ]);

            setTitle("");
            setContent("");
        } catch (error) {
            console.error("Error creating note:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);

            setNotes((currentNotes) =>
                currentNotes.filter((note) => note._id !== id)
            );
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    return (
        <div className="app">
            <h1>Student Notes</h1>

            <form onSubmit={handleSubmit} className="note-form">
                <input
                    type="text"
                    placeholder="Note title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />

                <textarea
                    placeholder="Write your note..."
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    required
                />

                <button type="submit">
                    Add Note
                </button>
            </form>

            <h2>My Notes</h2>

            {loading ? (
                <p>Loading notes...</p>
            ) : notes.length === 0 ? (
                <p>No notes yet — add one above!</p>
            ) : (
                <div className="notes-list">
                    {notes.map((note) => (
                        <div className="note-card" key={note._id}>
                            <h3>{note.title}</h3>

                            <p>{note.content}</p>

                            <small>
                                {new Date(note.createdAt).toLocaleString()}
                            </small>

                            <button
                                className="delete-button"
                                onClick={() => handleDelete(note._id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;