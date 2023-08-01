// prima destrutturiamo l'hook dello useState e poi importiamo dalla libreria di React;
import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import useFetch from "../useFetch";

const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error ? <div>{error}</div> : null}
            {/*ternary operator fa si che se la condizione a sx è vera, ciò che è a dx viene mostrato nel browser, altrimenti mostra niente*/}
            {isPending ? <div>Loading...</div> : null}
            {/* blogPosts è una prop così come title */}
            {data ? <BlogList blogPosts={data} title="Articles List" /> : null}
        </div>
    );

}
export default Home;