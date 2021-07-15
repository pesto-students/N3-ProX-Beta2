import { useState, useCallback } from "react";
import "./heart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/auth-context";
import { useWish } from "../../contexts/wish-list-context";
import debounce from "../../shared/utility/debounce";

function Heart({ product, filled, size = "lg" }) {
  const { currentUser } = useAuth();
  const [IsWish, setIsWish] = useState(filled);

  const { remove, add } = useWish();

  const handleData = async () => {
    if (IsWish) {
      await remove(currentUser.uid, product);
    } else {
      await add(currentUser.uid, product);
    }
  };
  const optimizedHandler = useCallback(debounce(handleData, 100), []);
  return (
    <div className="icon-wrap">
      <FontAwesomeIcon
        icon={IsWish ? filledHeart : faHeart}
        onClick={() => {
          setIsWish(!IsWish);
          optimizedHandler();
        }}
        color="#ff00a8"
        size={size}
      />
    </div>
  );
}

export default Heart;
