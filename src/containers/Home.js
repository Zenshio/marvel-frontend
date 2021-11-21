import { useNavigate } from "react-router-dom";

import FavStar from "../components/FavStar";

import CharacterPicture from "../components/CharacterPicture";
import ComicPicture from "../components/ComicPicture";

const Home = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();

  const handleClick = (event, character) => {
    if (!event.target.classList.contains("favstar-img"))
      navigate(`/character/${character._id}`, { state: { from: "/" } });
  };

  const favoritesCharacters = favorites?.characters;
  const favoritesComics = favorites?.comics;
  const defaultCharacter = {
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/2/50/5232171a451bb",
      extension: "jpg",
    },
    name: "Ultimate Spider-Man (USM)",
  };

  const defaultComic = {
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/51f6911ce3cc3",
      extension: "jpg",
    },
    name: "Infinity Gauntlet (1991) #1",
  };
  return (
    <main className="Home">
      <div className="container">
        <div className="Home-content">
          <h1>Welcome to the Marvel Universe!</h1>
          <div className="categories">
            <div className="Characters">
              <div className="character main-page">
                <CharacterPicture character={defaultCharacter} />
                <div className="character-name">Browse Characters</div>
              </div>
            </div>
            <div className="Comics">
              <div className="comic main-page">
                <ComicPicture comic={defaultComic} />
                <div className="comic-title">Leaf through Comics</div>
              </div>
            </div>
          </div>
          {(favoritesCharacters.length > 0 || favoritesComics.length > 0) && (
            <div className="favorites">
              {favoritesCharacters.length > 0 && (
                <>
                  <h2>Favorite Characters </h2>
                  <div className="favorites-characters">
                    {favoritesCharacters.map((character) => {
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
                </>
              )}
              {favoritesComics.length > 0 && (
                <>
                  <h2>Favorite Comics </h2>
                  <div className="favorites-comics">
                    {favoritesComics.map((comic) => {
                      return (
                        <div
                          key={comic._id}
                          className="comic"
                          onClick={(event) => handleClick(event, comic)}
                        >
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
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
