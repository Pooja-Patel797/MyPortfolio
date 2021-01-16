import React from "react";
import { Helmet } from "react-helmet";

export const MetaTag = () => {
  return (
    <Helmet>
      <html lang="en" />

      <title>Pooja Patel</title>

      <meta name="description" content="My Portfolio using React JS" />
      <meta
        name="description"
        content="M.Tech in Information Technology from Devi Ahilya University | A former intern at Ernst & Young GDS|Problem Solver and |Software Engineer"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pooja Patel" />
      <meta property="og:description" content="My Portfolio using React JS." />
      <meta
        property="og:image"
        content="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/portfolio.jpeg?FiDuEq_3VnAh8wxpLykw3aWI.eIslcbH&size=770:433"
      />
    </Helmet>
  );
};
