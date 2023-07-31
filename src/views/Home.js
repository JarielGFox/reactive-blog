import { useState, useEffect } from "react"; // prima destrutturiamo l'hook dello useState e poi importiamo dalla libreria di React;
import BlogList from "../components/BlogList";

const Home = () => {
    // vari useState che ci permettono di interagire

    // questo prende i dati dal server 
    const [blogs, setBlogs] = useState(null);
    // questo permette che si visualizzi il loading message
    const [isPending, setIsPending] = useState(true);
    // questo per gestire i messaggi di errore
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                if (!response.ok) {
                    throw Error('Impossible to fetch data');
                }
                return response.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err => {
                setIsPending(false);
                setError(err.message);
            }))
    }, [])

    return (
        <div className="home">
            {error ? <div>{error}</div> : null}
            {/*ternary operator fa si che se la condizione a sx è vera, ciò che è a dx viene mostrato nel browser, altrimenti mostra niente*/}
            {isPending ? <div>Loading...</div> : null}
            {/* blogPosts è una prop così come title */}
            {blogs ? <BlogList blogPosts={blogs} title="Articles List" /> : null}
        </div>
    );

}
export default Home;