import React from "react";
import Anime from "react-anime";
// import logo from "../assets/images/logo.png";

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
              <div className="flex flex-col text-2xl font-extrabold animated-lead-text tracking-wider ">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-200 to-yellow-400">
                UKRAINIAN CANADIAN SOCIAL SERVICES - OTTAWA BRANCH
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-200 to-yellow-400 sm:text-center lg:text-center">
                  СУСПІЛЬНА СЛУЖБА УКРАЇНЦІВ КАНАДИ (ОТТАВA) 
                </span>
              </div>
            </Anime>
          ) : (
            <h3
              className="text-gray-200 mb-10 animated-lead-text sm:text-center text-left"
              style={{ transform: "translateY(-100px)" }}
            >
              UKRAINIAN CANADIAN SOCIAL SERVICES - OTTAWA BRANCH 123123123
              <br />
              СУСПІЛЬНА СЛУЖБА УКРАЇНЦІВ КАНАДИ (ОТТАВA)
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
            <h3 className="text-gray-200 mb-10 animated-lead-text text-center">
              UKRAINIAN CANADIAN SOCIAL SERVICES - OTTAWA BRANCH 1111111
              <br />
              СУСПІЛЬНА СЛУЖБА УКРАЇНЦІВ КАНАДИ ОТТАВИ
            </h3>
          </Anime>
        ) : (
          <h3
            className="text-gray-200 mb-10 animated-lead-text text-center"
            style={{ transform: "translateY(-100px)" }}
          >
            UKRAINIAN CANADIAN SOCIAL SERVICES - OTTAWA BRANCH 22222222
            <br />
            СУСПІЛЬНА СЛУЖБА УКРАЇНЦІВ КАНАДИ ОТТАВИ
          </h3>
        )}
      </div>
    );
  }
}

export default Banner;
