import React, { useRef,createContext } from "react";

export const AudioContext = createContext();

export const AudioControl = (props) => {
  const audioRef = useRef();
  return (
    <AudioContext.Provider value={audioRef}>
      {props.children}
    </AudioContext.Provider>
  );
};
