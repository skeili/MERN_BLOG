import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/home">
              Strona Główna
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Napisz Post
              <hr></hr>
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Wyloguj"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src="https://centrumtmt.com.pl/wp-content/uploads/2015/12/ludek-e1499079094150.png" alt="Zdjęcie Profilowe" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Zaloguj
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Zarejestruj
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
