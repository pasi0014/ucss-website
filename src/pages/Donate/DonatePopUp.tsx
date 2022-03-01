import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IrRRsGjXTlWWmWRMoG1XmMgg8BBVujyfAxX4b4FD5jqPZiq0wz6RjkIvjn67W5bjiiOZEk7eL7UYoMAYE73ILHu00KDp26GXa"
);

export const DonatePopUp = (props: any) => {
  console.log("DonatePopUp props:", props);
  return <Elements stripe={stripePromise}></Elements>;
};
