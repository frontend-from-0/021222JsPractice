import { AppContext } from "../../App";
import {NavbarLink} from "../NavbarLink";
import {useContext} from 'react';
import './styles.css';

export const Navbar = () => {
  const {user} = useContext(AppContext);
  console.log(user);
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <div>
          <NavbarLink title="Logo" />
        </div>
        <div className="navigation--right">
          <NavbarLink title="Menu"/>
          {user.isLoggedInUser ? <NavbarLink title={`Hi, ${user.name}!`}/> : <NavbarLink title="Login"/>}
        </div>
      </ul>
    </nav>
  )
}