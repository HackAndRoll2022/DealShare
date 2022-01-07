import React from 'react'
import { Navigator } from "../../components/navbar/Navigator";
import error from "../../assets/error.png";

const Error = () => {
    return (
      <div>
        <Navigator />
        <div className="tw-h-screen tw-flex tw-flex-col">
          <div className="container tw-px-6 tw-my-6">
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center mx-5 img-fluid tw-animate-pulse">
              <img src={error} alt="logo" width={600} height={300} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Error;