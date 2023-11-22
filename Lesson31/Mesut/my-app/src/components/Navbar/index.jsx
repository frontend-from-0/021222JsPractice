import { useContext } from "react";
import { NavbarLink } from "../NavbarLink";
import "./styles.css";
import { AppContext } from "../../App";

export const Navbar = () => {
  const { user } = useContext(AppContext);
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <div>
          <NavbarLink title="Logo" />
        </div>
        <div className="navigation--right">
          <NavbarLink title="Menu" />
          {user.isLoggedInUser ?<NavbarLink title={`hi,${user.name}`} />: <NavbarLink title="Login" />}
          
        </div>
      </ul>
    </nav>
  );
};
