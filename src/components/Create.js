import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // impedisce il refresh della pagina
        e.preventDefault();
        const article = { title, body, author };

        setIsPending(true);

        try {
            //post request per "creare" il nuovo articolo
            const response = await fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(article)
            });

            if (!response.ok) {
                throw new Error('Network response failed');
            }

            // resetta il messaggio di errore
            setErrorMessage(null);

        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsPending(false);
            // ci riporta alla home
            navigate('/');
        }
    }

    return (
        <div className="create">
            <h2>Add a new article</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>Article title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Article body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Article author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending ? <button>Add Article</button> : <button disabled>Adding Article in progress...</button>}
            </form>
        </div>
    );
}

export default Create;