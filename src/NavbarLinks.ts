import INavbarLinks from "./interfaces//INavbarLinks";

export default class NavbarLinks {
  public static GetNavigationLinks() {
    const navigationLinks: INavbarLinks[] = [
      {
        title: "Home",
        link: "/home",
        isActive: false,
      },
      {
        title: "About Us",
        link: "/about",
        isActive: false,
      },
      {
        title: "How You Can Help Us",
        link: "/how-you-can-help-us",
        isActive: false,
      },
      {
        title: "How We Can Help You",
        link: "/how-we-can-help-you",
        isActive: false,
      },
      {
        title: "Our Stories",
        link: "/stories",
        isActive: false,
      },
    ];

    return navigationLinks;
  }
}
