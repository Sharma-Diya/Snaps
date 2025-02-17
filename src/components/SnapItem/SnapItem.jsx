import "./SnapItem.scss";

function SnapItem(props){


    return(
       <li className="photo-card">
         <img src={props.snap.photo} alt="" className="photo-card__photo"/>
         <p className="photo-card__photographer">{props.snap.photographer}</p>
         <ul className="photo-card__tags">
            {props.snap.tags.map((tag,index) =>{
                return(
                    <li key= {index} className="photo-card__tag-item">
                        {tag}
                    </li>
                )
            })}
         </ul>
       </li>
    );
}

export default SnapItem;
// console.log(SnapItem);