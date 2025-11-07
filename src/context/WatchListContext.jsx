import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { UserAuth } from "./userAuthContext";

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};
const WatchlistContext = createContext({
  watchlist: [],
  dispatch: () => {},
  ACTIONS: {},
});

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case ACTIONS.ADD: {
      if (state.includes(action.id)) {
        return state;
      }
      return [...state, action.id];
    }
    case ACTIONS.REMOVE: {
      return state.filter((id) => id != action.id);
    }
  }
}
function initialState(user) {
  let storedList = localStorage.getItem(user);
  console.log(typeof storedList);
  return storedList ? JSON.parse(storedList) : [];
}

const WatchlistProvider = ({ children }) => {
  const { user } = useContext(UserAuth);
  const [watchlist, dispatch] = useReducer(reducer, user, initialState);

  useEffect(() => {
    localStorage.setItem(user, JSON.stringify(watchlist));
  }, [watchlist]);

  console.log(watchlist);
  const value = { watchlist, dispatch, ACTIONS };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};

export { WatchlistProvider, WatchlistContext, ACTIONS };
