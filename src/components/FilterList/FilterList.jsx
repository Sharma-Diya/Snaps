import "./FilterList.scss";
import tagData from "../../data/tags.json";

function FilterList(props){

    return(
        <section className="filter-list">
            <ul className="filter-list__list">
                {tagData.map((tag,index)=>{
                    const highlight = tag === props.selectedTag;
                    return (
                        <li onClick={()=>{
                            props.handleTagClick(tag);
                        }}
                        key = {index}
                        className={`tag-list__item ${
                            highlight === true ? "tag-list__item--selected" : null
                          } `}
                        >
                          {tag}
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}
export default FilterList;