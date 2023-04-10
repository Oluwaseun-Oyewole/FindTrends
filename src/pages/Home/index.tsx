import React from "react";
import { Hero } from "../../components/UI/Hero";
import { SectionTab } from "../../components/UI/Section";
import { Tab } from "../Tab";
import { Deals } from "../../components/Deals";
export const Home = () => {
  return (
    <>
      <Hero />
      <SectionTab />
      <Tab />
      <Deals />
    </>
  );
};
