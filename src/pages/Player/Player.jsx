import React, { useEffect, useState } from "react";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router";
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    key: "",
    published_at: "",
    name: "",
    type: "",
  });
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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => navigate(-2)}
        className="absolute top-5 left-5 w-12 cursor-pointer"
      />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        width={"90%"}
        height={"90%"}
        frameborder="0"
        allowFullScreen
        className="rounded-[10px]"
      ></iframe>

      <div className="flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
