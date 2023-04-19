import { useState, useEffect } from "react";

const useIsInView = (ref: any) => {
  const [inView, setInView] = useState(false);

  const checkInView = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;

      const isVisible =
        rect.top <= windowHeight &&
        rect.bottom >= 0 &&
        rect.left <= windowWidth &&
        rect.right >= 0;

      setInView(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkInView);
    window.addEventListener("resize", checkInView);

    return () => {
      window.removeEventListener("scroll", checkInView);
      window.removeEventListener("resize", checkInView);
    };
  }, [ref]);

  return inView;
};

export default useIsInView;
