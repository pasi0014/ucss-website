import INavbarLinks from "./interfaces//INavbarLinks";
import messages from "./components/Navbar/messages";

export default class NavbarLinks {
  public static GetNavigationLinks() {
    const navigationLinks: INavbarLinks[] = [
      {
        title: messages.home,
        link: "/home",
        isActive: false,
      },
      // {
      //   title: messages.about,
      //   link: "/about",
      //   isActive: false,
      // },
      // {
      //   title: messages.howWeCanHelpYou,
      //   link: "/how-we-can-help-you",
      //   isActive: false,
      // },
      {
        title: messages.donate,
        link: "/donate",
        isActive: false,
      },
      {
        title: messages.reviews,
        link: "/news",
        isActive: false,
      },
      {
        title: messages.contact,
        link: "/contact",
        isActive: false,
      },
    ];

    return navigationLinks;
  }
}
