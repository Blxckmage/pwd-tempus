import React from "react";
import AboutHeader from "./AboutHeader";
import AboutHistory from "./AboutHistory";
import AboutCulture from "./AboutCulture";
import AboutTeam from "./AboutTeam";

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHeader />
      <AboutHistory />
      <AboutCulture />
      <AboutTeam />
    </>
  );
};

export default AboutPage;
