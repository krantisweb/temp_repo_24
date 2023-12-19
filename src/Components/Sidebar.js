
import React, { useState, useEffect } from "react";
import VinayanLogo from "../assets/images/vinayan-logo.png";
import {
  FaAngleRight,
  FaAngleDown,
  FaTh,
  FaShoppingBag,
  FaRegChartBar,
  FaUserAlt,
  FaThList,
  FaVideo,
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [shouldRenderIcons, setShouldRenderIcons] = useState(
    window.innerWidth > 650
  );
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 650);
  const location = useLocation();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShouldRenderIcons(screenWidth > 650);
      setIsSmallScreen(screenWidth <= 650);
      if (screenWidth > 650 && isSmallScreen) {
        setOpen(false); // Close sidebar on larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  const Menus = [
    { path: "/dashboard", title: "Dashboard", icon: <FaTh /> },
    { path: "/records", title: "Records", icon: <FaShoppingBag /> },
    {
      path: "/configurations",
      title: "Configurations",
      icon: <FaRegChartBar />,
      gap: true,
    },
    { path: "/recording", title: "Video Recording", icon: <FaVideo /> },
    { path: "/profile", title: "Profile", icon: <FaUserAlt /> },
    { path: "/documents", title: "Documents", icon: <FaThList /> },
  ];

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`${
          isSmallScreen
            ? `fixed top-0 left-0 right-0 mt-3 w-${open ? "60" : "20"}`
            : "fixed left-0 h-full"
        } p-4 sidebar-container pt-8 duration-300 bg-white shadow-2xl `}
        style={{ zIndex: isSmallScreen ? 0 : 1 }}
      >
        {/* Sidebar content */}
        {!isSmallScreen && (
          <div
            className={`toggle-box absolute -right-5 top-2 w-12 h-12 bg-[#BE2323] border-white flex items-center justify-center
            border-4 rounded-full cursor-pointer transition-transform transform ${
              open ? "rotate-90" : "rotate-0"
            }`}
            onClick={toggleSidebar}
          >
            {shouldRenderIcons &&
              (open ? (
                <FaAngleDown className="text-white" />
              ) : (
                <FaAngleRight className="text-white" />
              ))}
          </div>
        )}
        {open && (
          <div className="flex items-center justify-center">
            <div className="w-40">
              <img
                src={VinayanLogo}
                className="p-2 mt-1"
                alt="Vinayan Logo"
                name="Vinayan Logo"
              />
            </div>
          </div>
        )}
        <div
          className={`
          menu-container
          ${!isSmallScreen || (isSmallScreen && open) ? "" : "hidden"}
        `}
        >
          <ul className="link-list">
          {Menus.map((Menu, index) => (
  <NavLink
    to={Menu.path}
    key={index}
    className={`
      flex rounded-md p-2 cursor-pointer transition duration-300 
      ${Menu.gap ? "mt-2" : "mt-2"} ${index === 0 && "bg-light-white"}
      ${!shouldRenderIcons && ""}
      hover:bg-[#BE2323] hover:text-white items-center 
      ${location.pathname === Menu.path ? "bg-[#BE2323] text-white" : " text-gray-700"}
      ${isSmallScreen ? "text-sm font-semibold	" : "text-xl font-semibold	"}   // Adjust text size for small screens
    `}
  >
    {shouldRenderIcons && <div>{Menu.icon}</div>}
    <span className={`${!open && "hidden"} ml-2  origin-left duration-200`}>
      {Menu.title}
    </span>
  </NavLink>
))}

          </ul>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`  ${
          isSmallScreen
            ? "transition-ml mt-20 "
            : `transition-ml ${open ? "ml-60" : "ml-20"}`
        }`}
      >
        {/* Top navigation bar with toggle button */}
        <div
          className={`top-nav bg-[#BE2323] shadow-xl fixed w-full top-0 p-2 ml-${
            open ? "6" : "0"
          }  flex  ${isSmallScreen && ""}`}
        >
          {/* ... (unchanged) */}

          {/* Toggle button for small screens */}
          {isSmallScreen && (
            <div
              className={`toggle-box w-12 h-12  bg-[#BE2323] border-white flex items-center justify-center
                border-4 rounded-full cursor-pointer transition-transform transform ${
                  open ? "rotate-180" : "rotate-90"
                }  `}
              onClick={toggleSidebar}
            >
              {open ? (
                <FaAngleDown className="text-white" />
              ) : (
                <FaAngleRight className="text-white" />
              )}
            </div>
          )}

          {/* Current page title */}
          {Menus.map((Menu) =>
            location.pathname === Menu.path ? (
              <div
                key={Menu.path}
                className="text-xl font-semibold text-white my-2 mx-5	"
              >
                {Menu.title}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
