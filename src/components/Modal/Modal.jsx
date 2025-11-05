import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";

const Modal = ({ open = true, id = 507244, setOpen }) => {
  const [apiData, setApi] = useState("");
  console.log(id);
  useEffect(() => {
    if (id == 0 || id == null) {
      return;
    }
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmZhMzk4ZGM2YTMwZDllYTdjZTExNWY1ODk2ODZlOCIsIm5iZiI6MTc2MTU2NTU0OS40MTYsInN1YiI6IjY4ZmY1YjZkZTMyNjQ5OWJiODlmYjRlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.57PpafavkTYnrbwtHXmBW8eJAyqeaS7rSo8C4N7MNxo",
      },
    };
    console.log(id);
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => setApi(res))
      .catch((err) => console.error(err));
  }, [id]);

  if (!open) {
    return null;
  }
  if (!apiData) {
    return;
  }

  function handleClick() {
    console.log("hello");
    setOpen(false);
    setApi("");
  }

  return createPortal(
    <div className="fixed top-0 h-screen left-0 w-screen backdrop-blur-sm z-30 flex justify-center items-center">
      <div className="bg-black w-2xl  py-5 px-5 ">
        <Link to={`/player/${apiData.id}`}>
          <div className="flex justify-center">
            <img
              className="w-[70%] "
              src={"https://image.tmdb.org/t/p/w500/" + apiData.backdrop_path}
              alt=""
            />
          </div>
          <h1 className="font-bold text-center my-3">
            {apiData.original_title}
          </h1>
        </Link>
        <p>{apiData.overview}</p>
        <div className="">
          <button className="py-2 px-4 hover:bg-gray-300">
            Add to watchList
          </button>
        </div>
        <button
          className="py-2 px-4 hover:bg-gray-300 z-40 "
          onClick={() => handleClick()}
        >
          X
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export { Modal };
