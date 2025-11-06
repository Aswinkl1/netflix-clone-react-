import { createContext, useReducer, useState } from "react";

const WatchlistContext = createContext({ watchlist: [] });
const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

function reducer(state, action) {}

const WatchlistProvider = ({ children }) => {
  const [watchlist, dispatch] = useReducer(reducer, []);

  const value = { watchlist };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};

export { WatchlistProvider, WatchlistContext, ACTIONS };
