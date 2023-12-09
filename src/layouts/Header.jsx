import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoImg from "../assets/logo.jpeg";

const links = [
  {
    route: "/",
    name: "About",
  },
  {
    route: "/projects",
    name: "Projects",
  },
  {
    route: "/exp",
    name: "Experience",
  },
  {
    route: "/edu",
    name: "Education",
  },
  {
    route: "/skills",
    name: "Skills",
  },

  {
    route: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");
  const themeButton = useRef(null);
  const darkTheme = "dark";
  const iconTheme = "uil-sunset";

  const getCurrentTheme = () =>
    document.body.parentElement.classList.contains(darkTheme)
      ? "dark"
      : "light";
  const getCurrentIcon = () =>
    themeButton.current.classList.contains(iconTheme)
      ? "uil-moonset"
      : "uil-sunset";

  useEffect(() => {
    if (selectedTheme) {
      document.body.parentElement.classList[
        selectedTheme === "dark" ? "add" : "remove"
      ](darkTheme);
      themeButton.current.classList[
        selectedIcon === "uil-moonset" ? "add" : "remove"
      ](iconTheme);
    }
  }, []);

  const handleThemeClick = () => {
    document.body.parentElement.classList.toggle(darkTheme);
    themeButton.current.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };
  return (
    <header
      className="w-full top-0  fixed bg-white dark:bg-black  dark:text-white z-50"
      id="header"
    >
      <nav className="flex justify-between items-center py-4 px-8 max-w-screen-xl mx-auto">
        <img src={LogoImg} className="h-12" alt="" srcset="" />
        <ul className="flex justify-end space-x-6 mr-4 w-full uppercase font-[600] text-sm">
          {links.map((link, i) => (
            <li
              className={`hover:text-yellow-400 ${
                link.route === currentPath && "text-yellow-400"
              } grid place-items-center`}
              key={i}
            >
              <Link to={link.route} className="">
                {link.name}
              </Link>
            </li>
          ))}
          <li className="bg-yellow-400 px-7 py-1.5 rounded-full  grid place-items-center w-">
            <a
              href="https://drive.google.com/file/d/1RN291mmBUi31269vbgtx115GtXbedpeG/view"
              target="_blank"
              className="flex items-center "
            >
              <span>Resume</span>
              <i className="uil uil-arrow-right text-xl  ml-1"></i>
            </a>
          </li>

          <li className="hover:text-first-color cursor-pointer relative">
            <i
              ref={themeButton}
              className="uil uil-moonset text-3xl  absolute "
              onClick={handleThemeClick}
            ></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
