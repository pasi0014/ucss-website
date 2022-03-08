import React, { useEffect, useState } from "react";

// import messages from './messages';

export const Success = () => {
  return (
    <div className="container mx-auto py-24 sm:w-8/12 w-10/12 bg-green-100 rounded-xl m-5">
      <h1 className="flex flex-nowrap">
        Payment Received
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          className="mt-2 sm:ml-3"
        >
          <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
        </svg>
      </h1>
      <p className="leading text-base mt-4">
        Thank you for supporting Ukrainian Canadian Social Services
      </p>
    </div>
  );
};

export default Success;
