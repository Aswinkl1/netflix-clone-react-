import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import cards_data from "../../assets/cards/Cards_data";
import { WatchlistContext } from "../../context/WatchListContext";
import { Link } from "react-router";

async function getMovieData(id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmZhMzk4ZGM2YTMwZDllYTdjZTExNWY1ODk2ODZlOCIsIm5iZiI6MTc2MTU2NTU0OS40MTYsInN1YiI6IjY4ZmY1YjZkZTMyNjQ5OWJiODlmYjRlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.57PpafavkTYnrbwtHXmBW8eJAyqeaS7rSo8C4N7MNxo",
    },
  };
  // console.log(id);
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );

  return res.json();
}
const Watchlist = ({ handleClose }) => {
  const { watchlist, dispatch, ACTIONS } = useContext(WatchlistContext);
  const [apiDate, setApiDate] = useState([]);

  useEffect(() => {
    (async function () {
      let movieDetailPromises = watchlist.map((id) => getMovieData(id));
      let moveieDetails = await Promise.all(movieDetailPromises);
      setApiDate(moveieDetails);
    })();
  }, [watchlist]);

  return createPortal(
    <div className="fixed flex top-0 left-0 z-40 h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div className="p-5  grid grid-cols-4 gap-5 max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:hidden">
        {watchlist.length == 0 && (
          <div className="text-white ">watchlist is empty</div>
        )}
        {apiDate.map((data, i) => {
          return (
            <div
              className="relative shrink-0 group border flex justify-center "
              onClick={() => {}}
              key={data.id}
            >
              {/* <Modal open={isOpen} /> */}
              <img
                className=" cursor-pointer rounded w-80 "
                src={"https://image.tmdb.org/t/p/w500/" + data.backdrop_path}
                alt=""
              />
              <div className="invisible group-hover:visible absolute inset-0 flex gap-3 justify-center items-center">
                <button
                  className=" bottom-[50%]  bg-black  p-3 left-[50%] rounded-2xl  group-hover:visible"
                  onClick={() => {
                    dispatch({ type: ACTIONS.REMOVE, id: data.id });
                  }}
                >
                  remove
                </button>

                <Link to={`/player/${data.id}`}>
                  <button className=" bottom-[50%] border bg-black border-red-500 p-3 left-[50%] rounded-2xl  group-hover:visible">
                    Watch
                  </button>
                </Link>
              </div>
              <p className="absolute bottom-2.5 right-2.5 text-gray-500">
                {data.original_title}
              </p>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => handleClose(false)}
        className=" absolute right-50 top-50 py-4 px-5 rounded-3xl hover:bg-black"
      >
        X
      </button>
    </div>,
    document.getElementById("portal")
  );
};

export default Watchlist;
