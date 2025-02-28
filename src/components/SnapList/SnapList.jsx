import { useEffect, useState } from "react";
import "./SnapList.scss";
import SnapItem from "../SnapItem/SnapItem";
import axios from "axios";

const apiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

function SnapList({ selectedTag, setSelectedTag }) {
  const [snap, setSnap] = useState([]);

  useEffect(() => {
    const fetchSnaps = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=${apiKey}`
        );
        setSnap(response.data);
      } catch (error) {
        console.error("Error fetching snaps", error);
      }
    };
    fetchSnaps();
  }, []);

  let filteredSnap = snap;

  if (selectedTag !== "") {
    filteredSnap = snap.filter((snap) => {
      return snap.tags.includes(selectedTag);
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
