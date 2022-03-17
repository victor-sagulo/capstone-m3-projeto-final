import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [gamesList, setGamesList] = useState([]);
  const [listAllGames, setListAllGames] = useState([]);
  const [gameInfo, setGameInfo] = useState([]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const listGames = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=870a1b01479c4490b54b590b47f030f9&dates=2019-09-01,2019-09-30&page_size=12&page=${page}`
      )
      .then((response) => {
        setGamesList(response.data.results);
      });
  };

  const listMoreGames = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=870a1b01479c4490b54b590b47f030f9&dates=2019-09-01,2019-09-30&page_size=24&page=${page}`
      )
      .then((response) => {
        setListAllGames(response.data.results);
      });
  };

  const getGameInfo = (game) => {
    const gameIndex = listAllGames.find((item) => item.id === game.id);
    axios
      .get(
        `https://api.rawg.io/api/games/${gameIndex.id}?key=870a1b01479c4490b54b590b47f030f9`
      )
      .then((response) => {
        setGameInfo(response.data.results);
      });
  };

  useEffect(() => {
    listGames();
    listMoreGames();
  }, [page]);

  return (
    <GamesContext.Provider
      value={{ gamesList, listAllGames, nextPage, previousPage, getGameInfo }}
    >
      {children}
    </GamesContext.Provider>
  );
};
