import { useState, useEffect } from "react"; // prima destrutturiamo l'hook dello useState e poi importiamo dalla libreria di React;
import BlogList from "../components/BlogList";

const Home = () => {
    // blogs è un array di oggetti al quale applichiamo il metodo map()
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
            })
    }, [])

    return (
        <div className="home">
            {/* il "logical and" fa si che se la condizione a sx è vera, ciò che è a dx viene mostrato nel browser */}
            {isPending && <div>Loading...</div>}
            {/* blogPosts è una prop così come title */}
            {blogs && <BlogList blogPosts={blogs} title="Blogs List" />}
        </div>
    );

}
export default Home;