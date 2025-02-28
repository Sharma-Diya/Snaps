import "./FilterList.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

function FilterList({ selectedTag, handleTagClick }) {
  const [tags, setTags] = useState([]);

  const fetchTags = async () => {
    try {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=${apiKey}`
      );
      setTags(response.data || []);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <section className="filter">
      <p>Filters</p>
      <ul className="filter-list">
        {tags.map((tag, index) => {
          const highlight = tag === selectedTag;
          return (
            <li
              onClick={() => handleTagClick(tag)}
              key={index}
              role="button"
              aria-selected={highlight}
              className={`filter-list__item ${
                highlight ? "filter-list__item--selected" : ""
              }`}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FilterList;
