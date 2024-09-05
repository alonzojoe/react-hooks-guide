import React from "react";
import HeaderItems from "@/Layouts/components/HeaderItems";
import GitHubLogo from "@/assets/images/github.png";

const Header = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h1 p-2 bg-dark shadow top-0 position-fixed w-100 z-3"
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
          <HeaderItems />
        </div>
        <div className="mx-2">
          <div className="d-flex align-items-center justify-content-end gap-3">
            <a
              href="https://github.com/alonzojoe/react-hooks-guide"
              target="_blank"
            >
              <img src={GitHubLogo} alt="ReactHooks" width="35" height="35" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
