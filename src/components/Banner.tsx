import React from "react";
import Anime from "react-anime";

interface BannerState {
  animateTitle: boolean;
  animateBackgroundImage: boolean;
}
interface BannerProps {
  animateTitle: boolean;
  animateBackgroundImage: boolean;
}

class Banner extends React.Component<BannerProps, BannerState> {
  constructor(props: BannerProps) {
    super(props);
    this.state = {
      animateTitle: props.animateTitle,
      animateBackgroundImage: props.animateBackgroundImage,
    };
  }

  animateBackgroundImage() {
    return (
      // Animating whole container with background image
      <Anime
        translateY={[-300, 0]}
        easing={"easeOutSine"}
        opacity={[0, 1]}
        duration={1000}
      >
        <div className="jumbotron bg-cover flex justify-center items-end">
          <div className="overlay"></div>
          {this.state.animateTitle ? (
            <Anime
              translateY={[0, -100]}
              easing={"easeInOutSine"}
              opacity={[0, 1]}
              delay={1000}
            >
              <h3 className="text-gray-200 mb-10 animated-lead-text">
                <p>
                  {/* <img src="." height="55" alt="ottawa-landscape" /> */}
                </p>
                UKRAINIAN CANADIAN SOCIAL SERVICES OTTAWA
                <br />
                СУСПІЛЬНА СЛУЖБА УКРАЇНЦІВ КАНАДИ ОТТАВА
              </h3>
            </Anime>
          ) : (
            <h3
              className="text-gray-200 mb-10 animated-lead-text"
              style={{ transform: "translateY(-100px)" }}
            >
              <p>{/* <img src="." height="55" alt="ottawa-landscape" /> */}</p>
              UKRAINIAN CANADIAN SOCIAL SERVICES OTTAWA
              <br />
              СУСПІЛЬНА СЛУЖБА УКРАЇНЦІВ КАНАДИ ОТТАВА
            </h3>
          )}
        </div>
      </Anime>
    );
  }

  render() {
    if (this.state.animateBackgroundImage) return this.animateBackgroundImage();
    return (
      <div className="jumbotron bg-cover flex justify-center items-end">
        <div className="overlay"></div>
        {this.state.animateTitle ? (
          <Anime
            translateY={[0, -100]}
            easing={"easeInOutSine"}
            opacity={[0, 1]}
            delay={1000}
          >
            <h3 className="text-gray-200 mb-10 animated-lead-text">
              <p>{/* <img src="." height="55" alt="ottawa-landscape" /> */}</p>
              UKRAINIAN CANADIAN SOCIAL SERVICES OTTAWA
              <br />
              СУСПІЛЬНА СЛУЖБА УКРАЇНЦІВ КАНАДИ ОТТАВА
            </h3>
          </Anime>
        ) : (
          <h3
            className="text-gray-200 mb-10 animated-lead-text"
            style={{ transform: "translateY(-100px)" }}
          >
            <p>{/* <img src="." height="55" alt="ottawa-landscape" /> */}</p>
            UKRAINIAN CANADIAN SOCIAL SERVICES OTTAWA
            <br />
            СУСПІЛЬНА СЛУЖБА УКРАЇНЦІВ КАНАДИ ОТТАВА
          </h3>
        )}
      </div>
    );
  }
}

export default Banner;
