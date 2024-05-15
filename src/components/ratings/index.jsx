import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function Ratings({ stars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function ratingClickEvent(index) {
    setRating(index);
  }

  function mouseEnterEvent(index) {
    setHover(index);
  }

  function mouseLeaveEvent(index) {
    setHover(rating);
  }

  return (
    <div className="ratings">
      {[...Array(stars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => ratingClickEvent(index)}
            onMouseEnter={() => mouseEnterEvent(index)}
            onMouseLeave={() => mouseLeaveEvent(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}
