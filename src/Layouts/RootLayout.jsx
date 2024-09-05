import { useRef, useEffect, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { routes } from "@/lib/items.js";
import HookLogo from "@/assets/images/hook.png";
import Header from "@/Layouts/components/Header";
import HeaderItems from "@/Layouts/components/HeaderItems";
import Sidebar from "@/Layouts/components/Sidebar";
import ToggledSidebar from "@/Layouts/components/ToggledSidebar";

const RootLayout = () => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const getUpdatedHeight = () => {
    if (headerRef.current) {
      setHeaderHeight(`${headerRef.current.offsetHeight}px`);
    }
  };

  useEffect(() => {
    getUpdatedHeight();
    window.addEventListener("resize", getUpdatedHeight);

    return () => {
      window.removeEventListener("resize", getUpdatedHeight);
    };
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <div className="row" style={{ marginTop: headerHeight }}>
        <div
          className="col-xxl-2 col-xl-3 col-lg-3 d-none d-lg-block"
          style={{
            position: "sticky",
            top: headerHeight,
            overflowY: "auto",
          }}
        >
          <Sidebar headerHeight={headerHeight} routes={routes} />
        </div>
        <div
          className="col-xxl-10 col-xl-9 col-lg-9 col-sm-12"
          style={{ height: `calc(100vh - ${headerHeight})`, overflowY: "auto" }}
        >
          <div className="container-fluid pt-3">
            <Outlet />
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-start"
        id="sidebar"
        aria-labelledby="sidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarLabel">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <HeaderItems />
              </div>
            </div>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <ToggledSidebar routes={routes} />
      </div>
    </>
  );
};

export default RootLayout;
