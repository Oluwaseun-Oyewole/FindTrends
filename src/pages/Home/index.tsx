import React from "react";
import { Hero } from "../../components/UI/Hero";
import { SectionTab } from "../../components/UI/Section";
import { Tab } from "../Tab";
import { Deals } from "../../components/Deals";
import { JoinUs } from "../../components/UI/Join";
import { Brands } from "../../components/UI/Brands";
export const Home = () => {
  return (
    <>
      <Hero />
      <SectionTab />
      <Brands />
      <Tab />
      <Deals />
      <JoinUs />
    </>
  );
};
