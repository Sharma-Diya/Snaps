import "./FilterList.scss";
import tagData from "../../data/tags.json";

function FilterList(props) {
  return (
    <section className="filter">
      <p>Filters</p>
      <ul className="filter-list">
        {tagData.map((tag, index) => {
          const highlight = tag === props.selectedTag;
          return (
            <li
              onClick={() => {
                props.handleTagClick(tag);
              }}
              key={index}
              className={`filter-list__item ${
                highlight === true ? "filter-list__item--selected" : null
              } `}
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
