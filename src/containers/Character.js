import { useState, useEffect } from "react";
import { Link, Navigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

import Loader from "../components/Loader";

import CharacterPicture from "../components/CharacterPicture";
import ComicPicture from "../components/ComicPicture";
import StanLee from "../assets/img/stan-lee.png";
import FavStar from "../components/FavStar";

const Character = ({ favorites, setFavorites }) => {
  const params = useParams();
  const characterId = params.id;
  const location = useLocation();
  const from = location.state?.from;
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER_ADDRESS}/comics/${characterId}`
      );

      setCharacter(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [characterId]);

  return !characterId ? (
    <Navigate to="/" />
  ) : isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="Character-content">
        <div className="Character-header">
          <span className="go-back">
            <Link to={from}>{"< Go back"}</Link>
          </span>
          <h1>
            {character.name}{" "}
            <FavStar
              type="characters"
              item={character}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </h1>
          <span></span>
        </div>
        <div className="Character-info">
          <CharacterPicture character={character} />
          <div className="Character-description">
            <div class="comics-dialog">
              {character.description
                ? character.description
                : "We're missing data about this one, if you manage to gather some info, please report back to us !"}
            </div>
            <img className="stan-lee" src={StanLee} alt="Stan Lee" />
          </div>
        </div>
        {character.comics.length > 0 && (
          <div className="Character-comics">
            <h2>Present in Comics</h2>
            {character.comics.map((comic) => {
              return (
                <div key={comic._id} className="Character-comics-info">
                  <ComicPicture comic={comic} />
                  <div className="comic-details">
                    <div className="comic-title">{comic.title}</div>
                    <div className="comic-description">
                      {comic.description
                        ? comic.description
                        : "No summary here... And I can't even tell you if this is worth reading..."}
                    </div>
                  </div>
                  <FavStar
                    type="comics"
                    item={comic}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Character;
