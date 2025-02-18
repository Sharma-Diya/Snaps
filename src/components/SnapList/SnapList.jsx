import { useState } from "react";
import "./SnapList.scss";
import snapData from "../../data/photos.json";
import SnapItem from "../SnapItem/SnapItem";

function SnapList(props) {
  const [snap, setSnap] = useState(snapData);

  let filteredSnap = snap;

  if (props.selectedTag !== "") {
    filteredSnap = snap.filter((snap) => {
      return snap.tags.includes(props.selectedTag);
    });
  }

  return (
    <section className="snap-list">
      <ul className="snap-list__info">
        {filteredSnap.map((snap) => {
          return <SnapItem key={snap.id} snap={snap} />;
        })}
      </ul>
    </section>
  );
}

export default SnapList;
