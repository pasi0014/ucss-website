import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const DonateDrawer = (props: any) => {
  const [stripePromise, setStripePromise] = useState<any>(null);
  useEffect(() => {
      setStripePromise(
        loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY as string)
      );
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }, []);

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
      successUrl: "https://ucssottawa.com/donate/success",
      cancelUrl: "https://ucssottawa.com/donate/failure",
    });
  };

  return (
    <div className="mx-auto">
      <div className="w-full flex md:flex-row flex-col items-center justify-center">
        <div
          className="w-full transition-all hover:scale-125 ease-in hover:bg-blue-300 cursor-pointer shadow-md rounded-lg mt-5 sm:mr-5"
          onClick={() => handleClick(process.env.REACT_APP_5 as string)}
        >
          <div className="md:flex p-8">
            <h2 className="text-2xl font-semibold leading-6 text-gray-800">
              $5
            </h2>
          </div>
        </div>

        <div
          className="w-full transition-all hover:scale-125 ease-in hover:bg-blue-300 cursor-pointer shadow-md rounded-lg mt-5 sm:mr-5"
          onClick={() => handleClick(process.env.REACT_APP_10 as string)}
        >
          <div className="md:flex p-8">
            <h2 className="text-2xl font-semibold leading-6 text-gray-800">
              $10
            </h2>
          </div>
        </div>

        <div
          className="w-full transition-all hover:scale-125 ease-in hover:bg-blue-300 cursor-pointer shadow-md rounded-lg mt-5 sm:mr-5"
          onClick={() => handleClick(process.env.REACT_APP_25 as string)}
        >
          <div className="md:flex items-center justify-center p-8">
            <h2 className="text-2xl font-semibold leading-6 text-gray-800">
              $25
            </h2>
          </div>
        </div>

        <div
          className="w-full transition-all hover:scale-125 ease-in hover:bg-blue-300 cursor-pointer shadow-md rounded-lg mt-5 sm:mr-5"
          onClick={() => handleClick(process.env.REACT_APP_50 as string)}
        >
          <div className="md:flex items-center justify-center p-8">
            <h2 className="text-2xl font-semibold leading-6 text-gray-800">
              $50
            </h2>
          </div>
        </div>

        <div
          className="w-full transition-all hover:scale-125 ease-in hover:bg-blue-300 cursor-pointer shadow-md rounded-lg  mt-5 sm:mr-0"
          onClick={() => handleClick(process.env.REACT_APP_100 as string)}
        >
          <div className="md:flex items-center justify-center p-8">
            <h2 className="text-2xl font-semibold leading-6 text-gray-800">
              $100
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateDrawer;
