import React, { createContext, useState } from 'react';

export const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [fromRight, setFromRight] = useState(false);
  const [isRightClicked, setIsRightClicked] = useState(false);
  const [iconColor, setIconColor] = useState(''); // New state for icon color

  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered, fromRight, setFromRight, isRightClicked, setIsRightClicked, iconColor, setIconColor }}>
      {children}
    </HoverContext.Provider>
  );
};
