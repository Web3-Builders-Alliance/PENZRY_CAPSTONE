import { useState } from "react";
import profile from "../../assets/profie.jpg";
import Navigation from "../dashboard-nav/Index";
import Logo from "../../Components/ui/Logo";
import Hamburger from "../../Components/icons/Hamburger";
import Cancel from "../../Components/icons/Cancel";
import { Outlet } from "react-router-dom";
import Bell from "../../Components/icons/Bell";
import useAuth from "../../hooks/useAuth";

const DashboardLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { auth } = useAuth();

  //Handle show navigation on mobile & Tablet

  function menuHandler() {
    setShowMenu(!showMenu);
  }

  //Handle closing navigation on mobile or tablet by clicking on any of the navItem in nav-menus.
  function navMenuHandler(value: boolean) {
    setShowMenu(value);
  }

  return (
    <div className="flex relative font-outfit">
      {/* MENU NAVIGATION BAR */}
      <div
        className={
          "lg:w-[19%] md:w-[35%] w-[90%] z-50 lg:z-0 bg-white border-r lg:px-4 px-5 border-grey-10 h-screen fixed top-0 left-0 transition-all duration-500" +
          `${
            showMenu ? " translate-x-0" : " lg:translate-x-0 -translate-x-full"
          }`
        }
      >
        {/* LOGO HEADER MENU STARTS */}
        <div className="lg:py-[22px] py-7 px-1 lg:px-4 flex items-center justify-between">
          <Logo className="h-8 font-bold text-body-xxl text-primary" />
          <div
            className="block md:hidden"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <Cancel />
          </div>
        </div>
        {/* LOGO HEADER MENU ENDS */}
        <Navigation navHandler={navMenuHandler} />
      </div>

      <div className="w-full ml-0 lg:w-[81%] lg:ml-[19%] bg-variant-10 min-h-screen relative">
        {/* NAVIGATION BAR STARTS */}
        <div className="md:px-10 px-4 py-[20px] h-[86px] md:h-[62px] z-30 bg-white sticky w-[100%] top-0 right-0">
          <Logo className="h-8 lg:hidden md:mt-0 mt-2 block" />

          <div className="fixed right-5 md:right-10 top-7 md:top-[18px] flex gap-x-4 items-center">
            <div className="py-2 px-[5px] cursor-pointer">
              <Bell />
            </div>

            <div className="md:flex items-center gap-1 hidden cursor-pointer">
              <img
                src={
                  auth.profileImage?.length !== 0 ? auth.profileImage : profile
                }
                alt=""
                className="w-7 h-7 object-cover object-center rounded-full"
              />
            </div>

            <div className="block lg:hidden" onClick={menuHandler}>
              <Hamburger />
            </div>
          </div>
        </div>
        {/* NAVIGATION BAR ENDS*/}

        {/* DASHBOARD BODY */}
        <div
          className="lg:px-10 md:px-8 px-3 pt-5"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
