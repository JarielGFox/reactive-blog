// per il routing importiamo queste proprietà
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Create from "./components/Create";
import ArticleDetails from "./views/ArticleDetails";
import NotFound404 from "./NotFound404";

function App() {
  return (
    // utilizziamo il componente Router per far capire che stiamo facendo il Routing
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* qui dentro ci sono i percorsi ai singoli componenti */}
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/articles/:id" element={<ArticleDetails />} />
            <Route path="*" element={<NotFound404 />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
