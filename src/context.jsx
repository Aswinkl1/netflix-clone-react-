import { createContext, useState } from "react";

const ComConetext = createContext(null);

const ComProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <ComConetext.Provider value={{ value, setValue }}>
      {children}
    </ComConetext.Provider>
  );
};

function useChangeString({ s }) {
  const [value, setValue] = useState();
  let string;
  let isCap = true;
  for (let i = 0; i < value.length; i++) {
    if (isCap) {
      string += value[i].toUpperCase();
      isCap = false;
    } else {
      string += value[i].toLowerCase();
      isCap = true;
    }
  }

  return [value, setValue];
}

export { ComConetext, ComProvider, useChangeString };
