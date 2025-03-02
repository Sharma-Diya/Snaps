import "./FilterList.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;


function FilterList({ selectedTag, handleTagClick }) {
  const [tags, setTags] = useState([]);

  const fetchTags = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/tags`
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
