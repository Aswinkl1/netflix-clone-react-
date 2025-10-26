import React, { useEffect, useRef } from "react";
import card_date from "../../assets/cards/Cards_data";
const TitleCard = () => {
  const cardRef = useRef();

  function handleEvent(e) {
    e.preventDefault();

    cardRef.current.scrollLeft += e.deltaY;
  }
  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleEvent);
    return () => {
      cardRef.current.removeEventListener("wheel", handleEvent);
    };
  }, []);

  return (
    <div className="mt-[50px] mb-[30px]">
      <h2 className="mb-2 text-3xl font-bold">Popular on Netflix</h2>
      <div
        className="flex gap-2.5 overflow-x-scroll [&::-webkit-scrollbar]:hidden"
        ref={cardRef}
      >
        {card_date.map((card, index) => {
          return (
            <div key={index} className="relative shrink-0 ">
              <img
                className=" cursor-pointer rounded "
                src={card.image}
                alt=""
              />
              <p className="absolute bottom-2.5 right-2.5">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
