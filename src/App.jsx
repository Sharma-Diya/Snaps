import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SinglePhoto from "./pages/SinglePhotoPage/SinglePhotoPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [displayTags, setDisplayTags] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  function handleDisplayTags() {
    setDisplayTags(!displayTags);
  }

  function handleTagClick(clickedTag) {
    setSelectedTag((prevTag) => (prevTag === clickedTag ? "" : clickedTag));
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage
                  displayTags={displayTags}
                  handleDisplayTags={handleDisplayTags}
                  handleTagClick={handleTagClick}
                  selectedTag={selectedTag}
                />
              </>
            }
          />
          <Route
            path="/photos/:id"
            element={
              <>
                <Header page="single-photo" />
                <SinglePhoto />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header page="not-found" />
                <NotFoundPage />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
