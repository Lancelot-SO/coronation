import React, { createContext, useState } from 'react';

export const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [fromRight, setFromRight] = useState(false);
  const [isRightClicked, setIsRightClicked] = useState(false);

  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered, fromRight, setFromRight, isRightClicked, setIsRightClicked }}>
      {children}
    </HoverContext.Provider>
  );
};
