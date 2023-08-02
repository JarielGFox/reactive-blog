// ci permette di prendere dei parametri dalle rotte
import { useNavigate, useParams } from "react-router";
import useFetch from "../useFetch";
import { useState } from "react";

const ArticleDetails = () => {
    // passiamo i parametri corretti da usare
    const { id } = useParams();
    const { data: article, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    const [deleteError, setDeleteError] = useState();


    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:8000/blogs/' + article.id, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Could not delete the article');
            }

            navigate('/');
        } catch (error) {
            setDeleteError(error.message);
        }
    }

    return (
        <div className="article-details">
            {isPending ? <div>Loading...</div> : null}
            {error ? <div>{error}</div> : null}
            {article ? (
                <article>
                    <h2>{article.title}</h2>
                    <p>Written by {article.author}</p>
                    <div>{article.body}</div>
                    <button onClick={handleClick}>Delete</button>
                    {deleteError ? <div>{deleteError}</div> : null}
                </article>
            ) : null}
        </div>
    );
}

export default ArticleDetails;