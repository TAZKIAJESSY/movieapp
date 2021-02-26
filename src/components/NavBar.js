import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      style={{
        margin: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/">
        HomePage
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/about">
        AboutPage
      </NavLink>

      <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/discover">
        DiscoverMOviePage
      </NavLink>
    </div>
  );
}
