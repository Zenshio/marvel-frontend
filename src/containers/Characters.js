import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CharacterPicture from "../components/CharacterPicture";
import FavStar from "../components/FavStar";
import Pagination from "../components/Pagination";
import Noresults from "../components/Noresults";
import Loader from "../components/Loader";

const Characters = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [params, setParams] = useState(
    JSON.parse(localStorage.getItem("last-search"))?.characters || {
      currentPage: 1,
      resultsPerPage: 100,
      name: "",
    }
  );

  const handleChange = (event) => {
    const newParams = Object.assign(
      { ...params },
      { currentPage: 1, name: event.target.value }
    );
    setParams(newParams);
    localStorage.setItem(
      `last-search`,
      JSON.stringify({ characters: newParams })
    );
  };

  const handleClick = (event, character) => {
    if (!event.target.classList.contains("favstar-img"))
      navigate(`/character/${character._id}`, {
        state: { from: "/characters" },
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER_ADDRESS}/characters`,
        {
          params: {
            limit: params.resultsPerPage,
            skip: (params.currentPage - 1) * params.resultsPerPage,
            name: params.name,
          },
        }
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [params]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="Characters-content">
        <h1>Characters</h1>
        <div className="search-name">
          <input
            className="search-name-input"
            name="name"
            placeholder="Looking for someone in particular ?"
            value={params.name}
            onChange={handleChange}
          />
        </div>
        {data.count ? (
          <>
            <div className="result-text">{data.count} answered your call!</div>
            <Pagination
              data={data}
              params={params}
              setParams={setParams}
              type="characters"
            />
            <div className="Characters-results">
              {data.results.map((character) => {
                return (
                  <div
                    key={character._id}
                    className="character"
                    onClick={(event) => handleClick(event, character)}
                  >
                    <CharacterPicture character={character} />
                    <FavStar
                      type="characters"
                      item={character}
                      favorites={favorites}
                      setFavorites={setFavorites}
                    />
                    <div className="character-name">{character.name}</div>
                  </div>
                );
              })}
            </div>
            <Pagination
              data={data}
              params={params}
              setParams={setParams}
              type="characters"
            />
          </>
        ) : (
          <Noresults />
        )}
      </div>
    </div>
  );
};

export default Characters;
