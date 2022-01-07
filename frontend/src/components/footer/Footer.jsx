import React from "react";

export default function Footer() {
  return (
    <footer className="tw-mt-5 footer tw-bg-black tw-relative tw-pt-1">
      <div className="container tw-mx-auto tw-px-6">
        <div className="tw-mt-5 tw-border-t-2 tw-border-gray-300 tw-flex tw-flex-col tw-items-center">
          <div className="sm:tw-w-2/3 tw-text-center tw-py-6">
            <p className="tw-text-2xl tw-text-blue-700 tw-font-bold tw-mb-2">
              © Team 
              <span className="tw-mx-1 tw-text-white"> NUSHackers2 </span>
              for Hack & Roll 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
