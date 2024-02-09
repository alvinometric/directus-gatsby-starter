import React from "react";
import { useGlobalMetadata } from "../directus";

const AboutPage = () => {
  const global = useGlobalMetadata();

  return (
    <main>
      <h1>{global.title}</h1>

      <p>YOUR_CONTENT </p>
    </main>
  );
};

export default AboutPage;
