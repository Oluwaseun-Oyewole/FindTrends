import React, { useState } from "react";
import { LinkedInNaviagtion } from "./Naviagtion";
import { CardSections } from "./CardSections";
import { Modal } from "./Modal";
import { ContextProvider } from "../../../components/context/ContextProvider";

export const LinkedInn = () => {
  const [modal, setModal] = useState(false);
  const val = { modal, setModal };

  return (
    <div className="bg-gray-100 shadow-lg">
      <ContextProvider.Provider value={val}>
        {/* <Modal /> */}
        <LinkedInNaviagtion />
        <CardSections />
      </ContextProvider.Provider>
    </div>
  );
};
