import React from "react";
import "./SinglePhotoPage.scss";
import Header from "../../components/Header/Header";
import Comments from "../../components/Comments/Comments";
import SinglePhoto from "../../components/SinglePhoto/SinglePhoto";

function PhotoDetails() {
  return (
    <div className="snap">
      <Header page="single-photo" />
      <SinglePhoto />
      <Comments />
    </div>
  );
}

export default PhotoDetails;
