const BlogList = ({ blogs, title }) => {

    // const BlogList = (props) => { // il parametro props è un oggetto
    // const blogs = props.blogs;
    // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((element) => (
                //la proprietà key deve essere univoca, ecco perchè in questo caso l'id, siccome aiuta React a capire cosa cambia o viene aggiunto
                <div className="blog-preview" key={element.id}>
                    <h2>{element.title}</h2>
                    <p>Written by <strong>{element.author}</strong></p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;