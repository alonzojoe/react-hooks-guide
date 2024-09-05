import { useRef, useEffect, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import HookLogo from "@/assets/images/hook.png";
import GitHubLogo from "@/assets/images/github.png";
import { routes } from "@/lib/items.js";
import Header from "@/Layouts/components/Header";
import Sidebar from "@/Layouts/components/Sidebar";

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
                <Link
                  to="/"
                  className="text-decoration-none text-white align-middle"
                >
                  <img src={HookLogo} alt="ReactHooks" width="50" height="50" />
                </Link>
                <Link
                  to="/"
                  className="mx-1 text-decoration-none text-white align-middle"
                >
                  <span>React Hooks Guide</span>
                </Link>
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
        <div className="offcanvas-body" data-bs-dismiss="offcanvas">
          <li className="bd-links-group pb-2 list-unstyled">
            <strong className="bd-links-heading d-flex w-100 align-items-center fw-semibold fs-4">
              Hooks
            </strong>

            <ul className="list-unstyled fw-normal pb-2 small">
              {routes.map((hook) => (
                <li key={hook.id}>
                  <NavLink
                    to={hook.path}
                    className=" bd-links-link d-inline-block text-decoration-none rounded route-link"
                  >
                    {hook.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
