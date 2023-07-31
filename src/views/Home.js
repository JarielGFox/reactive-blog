import { useState, useEffect } from "react"; // prima destrutturiamo l'hook dello useState e poi importiamo dalla libreria di React;
import BlogList from "../components/BlogList";

const Home = () => {
    // blogs è un array di oggetti al quale applichiamo il metodo map()
    const [blogs, setBlogs] = useState(null);

    // funzione filtrante degli elementi per id
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    }, [])

    return (
        <div className="home">
            {/* questa è una prop */}
            {blogs && <BlogList blogPosts={blogs} title="Blogs List" handleDelete={handleDelete} />}
        </div>
    );

}
export default Home;