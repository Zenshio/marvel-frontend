import { toast } from "react-toastify";

import favStarBlack from "../assets/img/favstar-black.png";
import favStarYellow from "../assets/img/favstar-yellow.png";

const FavStar = ({ type, item, favorites, setFavorites }) => {
  const handleClick = (item) => {
    const newFavorites = { ...favorites };
    const index = newFavorites[type].findIndex((i) => i._id === item._id);
    if (index !== -1) {
      newFavorites[type].splice(index, 1);
      toast.success(
        `${item.name || item.title} has been removed from your favorites!`
      );
    } else {
      newFavorites[type].push(item);
      toast.success(
        `${item.name || item.title} has been added to your favorites!`
      );
    }
    setFavorites(newFavorites);

    localStorage.setItem(`fav-${type}`, JSON.stringify(newFavorites[type]));
  };

  return favorites[type].find((f) => f._id === item._id) ? (
    <div className="FavStar">
      <img
        className="favstar-img"
        src={favStarYellow}
        alt={`${item._id}-favstar`}
        onClick={() => handleClick(item)}
      />
    </div>
  ) : (
    <div className="FavStar">
      <img
        className="favstar-img"
        src={favStarBlack}
        alt={`${item._id}-favstar`}
        onClick={() => handleClick(item)}
      />
    </div>
  );
};

export default FavStar;
