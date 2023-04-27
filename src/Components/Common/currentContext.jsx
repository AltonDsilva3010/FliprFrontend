import React, { useState } from "react";

export const CurrentContext = React.createContext();

const CurrentProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = React.useState();

  return (
    <CurrentContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </CurrentContext.Provider>
  );
};

export default CurrentProvider;
