import React, { useState } from "react";

const DrawerTemp = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleToggle}>Toggle Drawer</button>

      <div className="">{children}</div>
    </>
  );
};

export default DrawerTemp;
