// ci permette di prendere dei parametri dalle rotte
import { useParams } from "react-router";
import useFetch from "../useFetch";

const ArticleDetails = () => {
    // passiamo i parametri corretti da usare
    const { id } = useParams();
    const { data: article, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="article-details">
            {isPending ? <div>Loading...</div> : null}
            {error ? <div>{error}</div> : null}
            {article ? (
                <article>
                    <h2>{article.title}</h2>
                    <p>Written by {article.author}</p>
                    <div>{article.body}</div>
                </article>
            ) : null}
        </div>
    );
}

export default ArticleDetails;