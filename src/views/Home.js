import { useState } from "react"; // prima destrutturiamo l'hook dello useState e poi importiamo dalla libreria di React;
import BlogList from "../components/BlogList";


const Home = () => {
    // blogs è un array di oggetti al quale applichiamo il metodo map()
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mr.X', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Mr.Y', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mr.Z', id: 3 }
    ]);

    return (
        <div className="home">
            {/* questa è una prop */}
            <BlogList blogs={blogs} title="Blogs List" />
        </div>
    );
}

export default Home;