import { Outlet, NavLink } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h1 className="p-2">
        <button
          className="btn btn-dark p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="sidebar"
        >
          <i className="bx bx-menu-alt-left fs-1 border rounded p-1"></i>
        </button>
        <span className="mx-2">React Hooks Guide</span>
      </h1>

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
        <div className="offcanvas-body">
          <li className="bd-links-group py-2 list-unstyled">
            <strong className="bd-links-heading d-flex w-100 align-items-center fw-semibold fs-5">
              Hooks
            </strong>

            <ul className="list-unstyled fw-normal pb-2 small">
              <li>
                <NavLink
                  to="/use-state"
                  className="fs-4 bd-links-link d-inline-block text-decoration-none rounded"
                >
                  useState
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/use-reducer"
                  className="fs-4 bd-links-link d-inline-block text-decoration-none rounded"
                >
                  useReducer
                </NavLink>
              </li>
            </ul>
          </li>
        </div>
      </div>
      <div className="container-fluid">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
