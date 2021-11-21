import { useState, useEffect } from "react";
import axios from "axios";

import ComicPicture from "../components/ComicPicture";
import FavStar from "../components/FavStar";
import Pagination from "../components/Pagination";
import Noresults from "../components/Noresults";
import Loader from "../components/Loader";

const Comics = ({ favorites, setFavorites }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [params, setParams] = useState(
    JSON.parse(localStorage.getItem("last-search"))?.comics || {
      currentPage: 1,
      resultsPerPage: 100,
      title: "",
    }
  );

  const handleChange = (event) => {
    const newParams = Object.assign(
      { ...params },
      { currentPage: 1, title: event.target.value }
    );
    setParams(newParams);
    localStorage.setItem(`last-search`, JSON.stringify({ comics: newParams }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER_ADDRESS}/comics`,
        {
          params: {
            limit: params.resultsPerPage,
            skip: (params.currentPage - 1) * params.resultsPerPage,
            title: params.title,
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
      <div className="Comics-content">
        <h1>Comics</h1>
        <div className="search-name">
          <input
            className="search-name-input"
            name="title"
            placeholder="Want to read something in particular ?"
            value={params.title}
            onChange={handleChange}
          />
        </div>
        {data.count ? (
          <>
            <div className="result-text">
              {data.count} {data.count > 1 ? "are" : "is"} on our shelves !
            </div>
            <Pagination
              data={data}
              params={params}
              setParams={setParams}
              type="comics"
            />
            <div className="Comics-results">
              {data.results.map((comic, index) => {
                return (
                  <div key={comic._id} className="comic">
                    <ComicPicture comic={comic} />
                    <FavStar
                      type="comics"
                      item={comic}
                      favorites={favorites}
                      setFavorites={setFavorites}
                    />
                    <div className="comic-title">{comic.title}</div>
                  </div>
                );
              })}
            </div>
            <Pagination
              data={data}
              params={params}
              setParams={setParams}
              type="comics"
            />
          </>
        ) : (
          <Noresults />
        )}
      </div>
    </div>
  );
};

export default Comics;
