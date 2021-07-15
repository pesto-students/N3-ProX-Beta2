import "./star.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";

function Star(props) {
  return [...Array(5)].map((e, i) =>
    props.Rating > i ? (
      <div className="star-icon-wrap" key={i}>
        <FontAwesomeIcon icon={filledStar} color="#ff00a8" size="lg" />
      </div>
    ) : (
      <div className="star-icon-wrap" key={i}>
        <FontAwesomeIcon icon={faStar} color="#ff00a8" size="lg" />
      </div>
    )
  );
}

export default Star;
