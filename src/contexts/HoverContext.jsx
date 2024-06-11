import React, { createContext, useState } from 'react';

export const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState("left");
  const [fromRight, setFromRight] = useState(false);

  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered, fromRight, setFromRight }}>
      {children}
    </HoverContext.Provider>
  );
};
