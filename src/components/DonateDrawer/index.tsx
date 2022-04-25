import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const DonateDrawer = (isOpen: any) => {
  const [stripePromise, setStripePromise] = useState<any>(null);
  useEffect(() => {
    if (isOpen) {
      setStripePromise(
        loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY as string)
      );
    }
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }, [isOpen]);

  const handleClick = async (priceId: string) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://ucssottawa.com/donate",
      cancelUrl: "https://ucssottawa.com/donate",
    });
  };

  return (
    <>
      <div className="xl:mx-auto xl:container py-16 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div
            className="xl:w-full lg:w-10/12 relative w-full lg:mt-0 md:px-8"
            role="list"
          >
            <img
              src="https://i.ibb.co/0n6DSS3/bgimg.png"
              className="absolute w-full -ml-12 mt-24"
              alt="background circle images"
            />
            <div
              role="listitem"
              className="transition-all hover:scale-125 ease-in hover:bg-blue-300 cursor-pointer shadow rounded-lg p-8 relative z-30"
              onClick={() => handleClick(process.env.REACT_APP_5 as string)}
            >
              <div className="md:flex items-center justify-center">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  $5
                </h2>
              </div>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
              onClick={() => handleClick(process.env.REACT_APP_10 as string)}
            >
              <div className="w-full p-8 transition-all hover:scale-125 ease-in hover:bg-blue-300">
                <div className="md:flex items-center justify-center">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    $10
                  </h2>
                </div>
              </div>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
              onClick={() => handleClick(process.env.REACT_APP_25 as string)}
            >
              <div className="w-full p-8 transition-all hover:scale-125 ease-in hover:bg-blue-300">
                <div className="md:flex items-center justify-center">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    $25
                  </h2>
                </div>
              </div>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
              onClick={() => handleClick(process.env.REACT_APP_50 as string)}
            >
              <div className="w-full p-8 transition-all hover:scale-125 ease-in hover:bg-blue-300">
                <div className="md:flex items-center justify-center">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    $50
                  </h2>
                </div>
              </div>
            </div>
            <div
              role="listitem"
              className="transition-all hover:scale-125 ease-in hover:bg-blue-300 cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
              onClick={() => handleClick(process.env.REACT_APP_100 as string)}
            >
              <div className="md:flex items-center justify-center">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  $100
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateDrawer;
