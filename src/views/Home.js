import { useState } from "react"; // prima destrutturiamo l'hook dello useState e poi importiamo dalla libreria di React;


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map((element) => (
                <div className="blog-preview" key={element.id}>
                    <h2>{element.title}</h2>
                    <p>Written by {element.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;