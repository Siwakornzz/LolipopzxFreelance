import React from "react";
import Carousel from "./Carousel";
import FooterText from "./FooterText";
import Category from "../category/Category";
const IndexPage = () => {
  return (
    <>
      <Carousel />
      <Category />
      <FooterText />
    </>
  );
};

export default IndexPage;
