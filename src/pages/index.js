import React from "react";
import ButtonLinksContainer from "../components/ButtonLinksContainer";
import DescriptionSection from "../components/DescriptionSection";
import EventContainer from "../components/EventContainer";
import MainSection from "../components/MainSection";

export default function Home() {
  return (
    <>
      <MainSection name="main" />
      <DescriptionSection />
      <ButtonLinksContainer />
      <EventContainer />
    </>
  );
}
