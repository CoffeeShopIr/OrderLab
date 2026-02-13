import { NavLink } from "react-router-dom";

export default function NavigationHeader() {
  return (
    <>
      <div className="navigation">
        <div className="navigationWidth">
          <img src="vite.svg" />
          <div className="navigationLink">
            <NavLink
              to={""}
              className={({ isActive }) => (isActive ? "active" : "none")}
              end
            >
              <button>خانه</button>
            </NavLink>
            <NavLink to={"/Cofe"}>
              <button>کافه</button>
            </NavLink>
            <NavLink to={"/Restaurant"}>
              <button>رستوران</button>
            </NavLink>
            <NavLink to={"/FastFood"}>
              <button>فست فودی</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
