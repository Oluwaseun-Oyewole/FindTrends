import React, { createContext, useState } from "react";

export const ContextProvider = createContext({});

export const ModalProvider = ({ children }: any) => {
  const [show, setShow] = useState(false);
  const handleModalOpen = () => {
    setShow(true);
  };

  const removeModal = () => {
    setShow(false);
  };
  return (
    <ContextProvider.Provider value={{ show, handleModalOpen, removeModal }}>
      {children}
    </ContextProvider.Provider>
  );
};
