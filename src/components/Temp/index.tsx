import React, { useState } from "react";
import Anime from "react-anime";

const DrawerTemp = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleToggle}>Toggle Drawer</button>
      <Anime
        translateY={isOpen ? "0%" : "100%"}
        easing="easeOutQuad"
        duration={300}
        direction="reverse">
        <div className="">
          {children}
        </div>
      </Anime>
    </>
  );
};

export default DrawerTemp;
