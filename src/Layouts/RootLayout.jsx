import { useRef, useEffect, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import HookLogo from "@/assets/images/hook.png";
import GitHubLogo from "@/assets/images/github.png";

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
      <h1
        ref={headerRef}
        className="p-2 bg-dark shadow top-0 position-fixed w-100 z-3"
      >
        <div className="d-flex align-items-center justify-content-between">
          <div>
            {" "}
            <button
              className="btn btn-dark p-0 d-lg-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="sidebar"
            >
              <i className="bx bx-menu-alt-left fs-1 border rounded route-link p-1"></i>
            </button>
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
          <div className="mx-2">
            <a
              href="https://github.com/alonzojoe/react-hooks-guide"
              target="_blank"
            >
              <img src={GitHubLogo} alt="ReactHooks" width="35" height="35" />
            </a>
          </div>
        </div>
      </h1>
      <div className="row" style={{ marginTop: headerHeight }}>
        <div
          className="col-lg-2 d-none d-lg-block"
          style={{
            position: "sticky",
            top: headerHeight,
            overflowY: "auto",
          }}
        >
          <div
            className="container shadow"
            style={{ height: `calc(100vh - ${headerHeight})` }}
          >
            <li className="bd-links-group py-2 list-unstyled">
              <strong className="bd-links-heading d-flex w-100 align-items-center fw-semibold fs-4">
                Hooks
              </strong>

              <ul className="list-unstyled fw-normal pb-2 small">
                <li>
                  <NavLink
                    to="/use-state"
                    className=" bd-links-link d-inline-block text-decoration-none rounded route-link"
                  >
                    useState()
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/use-reducer"
                    className=" bd-links-link d-inline-block text-decoration-none rounded route-link"
                  >
                    useReducer()
                  </NavLink>
                </li>
              </ul>
            </li>
          </div>
        </div>
        <div
          className="col-lg-10 col-sm-12"
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
          <h5 className="offcanvas-title" id="sidebarLabel"></h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" data-bs-dismiss="offcanvas">
          <li className="bd-links-group py-2 list-unstyled">
            <strong className="bd-links-heading d-flex w-100 align-items-center fw-semibold fs-4">
              Hooks
            </strong>

            <ul className="list-unstyled fw-normal pb-2 small">
              <li>
                <NavLink
                  to="/use-state"
                  className=" bd-links-link d-inline-block text-decoration-none rounded route-link"
                >
                  useState()
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/use-reducer"
                  className=" bd-links-link d-inline-block text-decoration-none rounded route-link"
                >
                  useReducer()
                </NavLink>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
