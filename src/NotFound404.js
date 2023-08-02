import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <div className="not-found">
            <h2>Sorry but not sorry.</h2>
            <p>The page cannot be found.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default NotFound404;