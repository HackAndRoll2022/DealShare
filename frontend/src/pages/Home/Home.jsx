import React from "react";
import { Navigator } from "../../components/navbar/Navigator";
import teamwork from "../../assets/teamwork.svg";
import { Button } from "react-bootstrap";
import Footer from '../../components/footer/Footer';

export const Home = () => {
  return (
    <div>
      <Navigator />
      <div className="tw-h-screen tw-flex tw-flex-col">
        <h1 className="text-center tw-mt-3 tw-tracking-wide">Welcome</h1>
        <div className="container tw-px-6 tw-my-6">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center mx-5 img-fluid tw-animate-pulse">
          <img src={teamwork} alt="logo" width={600} height={300} />
            {/* <img src={IMG_ezreal} alt="ezreal" width={150} height={100} />
            <img src={IMG_mario} alt="mario" width={150} height={100} />
            <img src={IMG_voijin} alt="voljin" width={150} height={100} /> */}
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <h6 className="tw-text-slate-700 tw-italic">
            {" "}
            Get your combo sorted now!
          </h6>
          <Button
            className="tw-mt-4 tw-object-none tw-object-center"
            variant="outline-dark"
            size="sm"
            href="/login"
          >
            Login
          </Button>
        </div>

        <Footer/>
      </div>
    </div>
  );
};

export default Home;
