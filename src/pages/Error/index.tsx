import React from "react";
import { useRouteError } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export const Error = () => {
  const errorstate: any = useRouteError();

  return (
    <div>
      <div className="bg-hero-bg text-white">
        <Navbar />
      </div>
      <h1>Oopss</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorstate.statusText || errorstate.message}</i>
      </p>
    </div>
  );
};
