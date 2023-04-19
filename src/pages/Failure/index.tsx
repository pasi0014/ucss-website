import React, { useEffect, useState } from "react";

// import messages from './messages';

export const Failure = () => {
  return (
    <div className="container mx-auto py-24 sm:w-8/12 w-10/12 bg-red-100 rounded-xl m-5">
      <h1 className="flex flex-nowrap leading-relaxed text-xl">
        Error occurred while trying to process your payment 
      </h1>
    </div>
  );
};

export default Failure;
