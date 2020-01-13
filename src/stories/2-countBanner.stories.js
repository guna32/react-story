import React from "react";
import CountBanner from "../components/countBanner";

export default {
  component: CountBanner,
  title: "countBanner",
  excludeStories: /.*Data$/
};

export const emptyBanner = () => {
  return <CountBanner count={0}></CountBanner>;
};

export const nonEmptyBanner = () => {
  return <CountBanner count={5}></CountBanner>;
};
