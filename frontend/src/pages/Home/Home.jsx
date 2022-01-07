import React from "react";
import { Navigator } from "../../components/navbar/Navigator";

export const Home = () => {
  return (
    <div>
      <Navigator />
      <div className="tw-h-screen tw-flex tw-flex-col">
        <h1> Home Page Deals </h1>
      </div>
    </div>
  );
};

export default Home;
