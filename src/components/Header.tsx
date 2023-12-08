import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("about");
  };
  return (
    <header>
      <ul>
        <ul>
          <Link to={"/"}>Home</Link>
        </ul>
        <ul>
          <button onClick={onAboutClick}>About</button>
        </ul>
      </ul>
    </header>
  );
}

export default Header;
