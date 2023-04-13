import { createContext } from "react";
export const ModalContext = createContext({
  handleModalOpening: () => {},
  modal: false,
});
