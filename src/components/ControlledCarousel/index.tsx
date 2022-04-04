import React, { useState, useContext } from "react";
import { Context } from "../../components/Wrappper/index";
import { useIntl } from "react-intl";
import Carousel from "react-bootstrap/Carousel";
import { images } from "../../utils/importImages";

import messages from "./messages";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const context = useContext(Context);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  const { formatMessage } = useIntl();

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="sm:w-3/4 sm:h-2/4 w-screen block mx-auto rounded-lg p-2"
          src={images.medicine_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{formatMessage({ ...messages.medicine_1_title })}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="sm:w-2/3 sm:h-1/6 w-full block mx-auto rounded-xl p-2"
          src={images.medicine_2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>{formatMessage({ ...messages.aid_kits })}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="sm:w-3/4 sm:h-1/6 md:w-2/5 block mx-auto rounded-lg p-2"
          src={images.medicine_3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{formatMessage({ ...messages.medicine_1_title })}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="sm:w-1/2 sm:h-1/6 block mx-auto rounded-lg p-2"
          src={images.child_support}
          alt="Third slide"
        />
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="sm:w-3/4 sm:h-1/6 w-full block mx-auto rounded-lg p-2"
          src={images.received_help}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{formatMessage({ ...messages.received_help_title })}</h3>
          <p>{formatMessage({ ...messages.received_help_subtitle })}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
