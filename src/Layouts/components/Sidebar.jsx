import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ headerHeight, routes }) => {
  return (
    <div
      className="container shadow"
      style={{ height: `calc(100vh - ${headerHeight})` }}
    >
      <li className="bd-links-group py-2 list-unstyled">
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
  );
};

export default Sidebar;
