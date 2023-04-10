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
      {
        title: messages.donate,
        link: "/donate",
        isActive: false,
      },
      // {
      //   title: messages.waitingList,
      //   link: "/waiting-list",
      //   isActive: false,
      // },
      {
        title: messages.events,
        link: "/events",
        isActive: false,
      },
      {
        title: messages.reviews,
        link: "/news",
        isActive: false,
      },
      {
        title: messages.acknowledgments,
        link: "/acknowledgments",
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
