import React from "react";
import { Navigator } from "../../components/navbar/Navigator";
import teamwork from "../../assets/teamwork.svg";
import { Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/footer/Footer';

export const Landing = () => {
  const [cookies] = useCookies(["userInfo"]);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = cookies.userInfo;

    if (userInfo) {
      navigate("/home");
    }
  }, [cookies.userInfo, navigate]);


  return (
    <div>
      <Navigator />
      <div className="tw-h-screen tw-flex tw-flex-col">
        <h1 className="text-center tw-mt-3 tw-tracking-wide">Welcome</h1>
        <div className="container tw-px-6 tw-my-6">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center mx-5 img-fluid tw-animate-pulse">
            <img src={teamwork} alt="logo" width={600} height={300} />
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <h6 className="tw-text-slate-700 tw-italic">
            {" "}
            Get your combo sorted now!
          </h6>
          {cookies && cookies !== null && cookies !== "" ? (
            <Button
              className="tw-mt-4 tw-object-none tw-object-center"
              variant="outline-dark"
              size="sm"
              href="/login"
            >
              Login
            </Button>
          ) : (
            <h1> HELLO </h1>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;
