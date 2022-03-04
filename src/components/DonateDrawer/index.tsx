import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY as string);

const DonateDrawer = (isOpen: any) => {
  useEffect(() => {
    console.log(isOpen);
    // const handleClick = async () => {
    //   // When the customer clicks on the button, redirect them to Checkout.
    //   const stripe = await stripePromise;
    //   const { error } = await stripe.redirectToCheckout({
    //     lineItems: [
    //       {
    //         price: "{{PRICE_ID}}",
    //         quantity: 1,
    //       },
    //     ],
    //     mode: "payment",
    //     successUrl: "https://example.com/success",
    //     cancelUrl: "https://example.com/cancel",
    //   });
    //   // If `redirectToCheckout` fails due to a browser or network
    //   // error, display the localized error message to your customer
    //   // using `error.message`.
    // };
    // if (displayForm) {
    //   handleClick();
    // }
  }, [isOpen]);

  return (
    <>
      <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div
            className="xl:w-full lg:w-8/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <img
              src="https://i.ibb.co/0n6DSS3/bgimg.png"
              className="absolute w-full -ml-12 mt-24"
              alt="background circle images"
            />
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Starter
                </h2>
                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">
                  FREE
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                Full access to all features and no credit card required
              </p>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
            >
              {/* <div className="w-2.5  h-auto hover:bg-indigo-700 rounded-tl-md rounded-bl-md" /> */}
              <div className="w-full p-8 transition-all hover:scale-125 ease-in hover:bg-blue-300">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    Personal
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    $18<span className="font-normal text-base">/mo</span>
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                  Unlimited products features and dedicated support channels
                </p>
              </div>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Team
                </h2>
                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                  $18<span className="font-normal text-base">/mo</span>
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                Unlimited products features and dedicated support channels
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateDrawer;
