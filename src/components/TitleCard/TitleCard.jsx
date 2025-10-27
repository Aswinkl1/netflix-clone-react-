import React, { useEffect, useRef, useState } from "react";
import card_date from "../../assets/cards/Cards_data";
import { Link } from "react-router";

const TitleCard = ({ title, category }) => {
  const cardRef = useRef();
  const [apiData, setApiData] = useState([]);

  function handleEvent(e) {
    e.preventDefault();

    cardRef.current.scrollLeft += e.deltaY;
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmZhMzk4ZGM2YTMwZDllYTdjZTExNWY1ODk2ODZlOCIsIm5iZiI6MTc2MTU2NTU0OS40MTYsInN1YiI6IjY4ZmY1YjZkZTMyNjQ5OWJiODlmYjRlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.57PpafavkTYnrbwtHXmBW8eJAyqeaS7rSo8C4N7MNxo",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardRef.current.addEventListener("wheel", handleEvent);
    return () => {
      // cardRef.current.removeEventListener("wheel", handleEvent);
    };
  }, []);

  return (
    <div className="mt-[50px] mb-[30px]">
      <h2 className="mb-2 text-3xl font-bold">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div
        className="flex gap-2.5 overflow-x-scroll [&::-webkit-scrollbar]:hidden"
        ref={cardRef}
      >
        {apiData.map((card, index) => {
          return (
            <div key={index} className="relative shrink-0 ">
              <Link to={`/player/${card.id}`}>
                <img
                  className=" cursor-pointer rounded w-80"
                  src={"https://image.tmdb.org/t/p/w500/" + card.backdrop_path}
                  alt=""
                />
              </Link>
              <p className="absolute bottom-2.5 right-2.5">
                {card.original_title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
