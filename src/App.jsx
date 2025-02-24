import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SnapList from "./components/SnapList/SnapList";
import FilterList from "./components/FilterList/FilterList";
import Footer from "./components/Footer/Footer";
import SinglePhoto from "./pages/SinglePhoto/SinglePhoto";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

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
                <Header
                  page="home"
                  handleDisplayTags={handleDisplayTags}
                  displayTags={displayTags}
                />
                <div className="content">
                  <div
                    className={`container ${
                      displayTags ? "container--open" : ""
                    }`}
                  >
                    {displayTags && (
                      <FilterList
                        handleTagClick={handleTagClick}
                        selectedTag={selectedTag}
                      />
                    )}
                  </div>

                  <main className="main">
                    <div className="main__heading">
                      <p className="main__subheading"> Our mission:</p>
                      <h3 className="main__para">
                        Provide photographers a space to share photos of the
                        neighborhoods they cherish, &nbsp;
                        <span className="main__para-italic">
                          expressed in their unique style.
                        </span>
                      </h3>
                    </div>
                    <SnapList selectedTag={selectedTag} />
                  </main>
                </div>
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
