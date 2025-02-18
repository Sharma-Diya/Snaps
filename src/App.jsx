import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import SnapList from "./components/SnapList/SnapList";
import FilterList from "./components/FilterList/FilterList";
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
    <div>
      <Header handleDisplayTags={handleDisplayTags} displayTags={displayTags} />
      <div className="content">
        <div
          className={`container ${
            displayTags === true ? "container--open" : ""
          }`}
        >
          {displayTags === true ? (
            <FilterList
              handleTagClick={handleTagClick}
              selectedTag={selectedTag}
            />
          ) : null}
        </div>

        <main className="main">
          <div className="main__heading">
            <p className="main__subheading"> Our mission:</p>
            <h3 className="main__para">
              Provide photographers a space to share photos of the neighborhoods
              they cherish, &nbsp;
              <span className="main__para-italic">
                expressed in their unique style.
              </span>
            </h3>
          </div>
          <SnapList selectedTag={selectedTag} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default App;
