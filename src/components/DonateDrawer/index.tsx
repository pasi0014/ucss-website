import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";


const DonateDrawer = (isOpen: any) => {
  console.log(process.env.REACT_APP_PUBLISHABLE_KEY);
  const [stripePromise, setStripePromise] = useState<any>(null);
  useEffect(() => {
    console.log(isOpen);
    if (isOpen) {
      setStripePromise(loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY as string));
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
              className="transition-all hover:scale-125 ease-in hover:bg-blue-300 cursor-pointer shadow rounded-lg p-8 relative z-30"
              onClick={() => handleClick("price_1KZpbVGjXTlWWmWRbYmM4g5c")}
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  $25
                </h2>
                {/* <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">
                  FREE
                </p> */}
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                Full access to all features and no credit card required
              </p>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
              onClick={() => handleClick("price_1KZpcGGjXTlWWmWRwftbLWzq")}
            >
              <div className="w-full p-8 transition-all hover:scale-125 ease-in hover:bg-blue-300">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    $50
                  </h2>
                  {/* <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    $18<span className="font-normal text-base">/mo</span>
                  </p> */}
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                  Unlimited products features and dedicated support channels
                </p>
              </div>
            </div>
            <div
              role="listitem"
              className="transition-all hover:scale-125 ease-in hover:bg-blue-300 cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
              onClick={() => handleClick("price_1KZpctGjXTlWWmWRIpDKwsn9")}
            >
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  $100
                </h2>
                {/* <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                  $18<span className="font-normal text-base">/mo</span>
                </p> */}
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
