import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect (() => {
    const getCats = async () => {
      const res = await axios.get("/categories");setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">O Blogu</span>
        <img
          src="https://images.pexels.com/photos/1294238/pexels-photo-1294238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          width="200" height="300"
          alt=""
        />
        <p>
          Blog powstał w technologii MERN.
          Został stworzony w celu zaprezentowaniu go w pracy licencjackiej.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Kategorie Postów</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
             <Link to={`home/?cat=${c.name}`} className="link">
             <li className="sidebarListItem">{c.name}</li>
             </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Media społecznościowe</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
