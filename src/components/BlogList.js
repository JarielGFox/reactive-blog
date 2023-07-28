const BlogList = ({ blogPosts, title, handleDelete }) => {

    // const BlogList = (props) => { // il parametro props è un oggetto
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogPosts.map((element) => (
                //la proprietà key deve essere univoca, ecco perchè in questo caso l'id, siccome aiuta React a capire cosa cambia o viene aggiunto
                <div className="blog-preview" key={element.id}>
                    <h2>{element.title}</h2>
                    <p>Written by <strong>{element.author}</strong></p>
                    <button onClick={() => handleDelete(element.id)}>X</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;