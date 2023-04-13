import React, { useState } from "react";
import { LinkedInNaviagtion } from "./Naviagtion";
import { CardSections } from "./CardSections";
import { Modal } from "./Modal";
import { ModalContext } from "../../../components/store/ModalContext";

export const LinkedInn = () => {
  const [modal, setModal] = useState(false);

  const handleModalOpening = () => {
    setModal(!modal);
  };
  const val = { handleModalOpening, modal, setModal };

  return (
    <>
      <ModalContext.Provider value={val}>
        {modal && <Modal />}
        <div className="bg-gray-100">
          <div className="bg-white">
            <LinkedInNaviagtion />
          </div>
          <div>
            <CardSections />
          </div>
        </div>
      </ModalContext.Provider>
    </>
  );
};
