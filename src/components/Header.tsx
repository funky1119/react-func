import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <ul>
          <Link to={"/"}>Home</Link>
        </ul>
        <ul>
          <Link to={"/about"}>About</Link>
        </ul>
      </ul>
    </header>
  );
}

export default Header;
