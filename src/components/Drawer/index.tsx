import { ReactNode, useEffect, useRef } from "react";

interface IDrawer {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

export default function Drawer({ children, isOpen, setIsOpen }: IDrawer) {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // if (contentRef.current) {
    //   contentRef.current.scrollIntoView({ behavior: "smooth" });
    // }

    function handleEscapeKey(event: any) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    if (isOpen) {
      document.body.classList.add("drawer-open");
    } else {
      document.body.classList.remove("drawer-open");
    }
    return () => {
      document.body.classList.remove("drawer-open");
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <main
      className={
        " fixed overflow-hidden z-40 bg-gray-900 bg-opacity-80 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-opacity opacity-0 translate-x-full  ")
      }>
      <section
        className={
          " lg:w-8/12 w-full right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }>
        <article
          ref={contentRef}
          className="relative w-screen max-w-full flex flex-col space-y-6 overflow-y-scroll h-full">
          {/* <headerclassName="p-4 font-bold text-lg">
            <button onClick={() => setIsOpen(false)}>X</button>
          </header> */}
          {children}
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}></section>
    </main>
  );
}
