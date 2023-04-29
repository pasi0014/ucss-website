import React from "react";

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

  render() {
    return (
      <div className="jumbotron font-montserrat bg-cover flex justify-center items-end">
        <div className="overlay"></div>
        <div className="flex flex-col text-2xl font-extrabold animated-lead-text tracking-wider ">
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-200 to-yellow-400"
            style={{ transform: "translateY(-100px)" }}>
            UKRAINIAN CANADIAN SOCIAL SERVICES - OTTAWA BRANCH
          </span>
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-200 to-yellow-400 sm:text-center lg:text-center"
            style={{ transform: "translateY(-100px)" }}>
            СУСПІЛЬНА СЛУЖБА УКРАЇНЦІВ КАНАДИ (ОТТАВA)
          </span>
        </div>
      </div>
    );
  }
}

export default Banner;
