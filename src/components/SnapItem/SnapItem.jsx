import "./SnapItem.scss";
import { Link } from "react-router-dom";
function SnapItem({ snap }) {
  if (!snap) {
    return null;
  }
  return (
    <li className="photo-card">
      <Link to={`/photos/${snap.id}`} className="photo-card__link">
        <div className="photo-card__photo">
          <img src={snap.photo} alt="" className="photo-card__img" />
          <p className="photo-card__photographer">{snap.photographer}</p>
        </div>
      </Link>

      <ul className="photo-card__tags">
        {(snap.tags || []).map((tag, index) => {
          return (
            <li key={index} className="photo-card__tags--item">
              {tag}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default SnapItem;
