import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Web blog</span>
        <span className="headerTitleLg">MERN stack</span>
        <span className="headerTitleName">by Michał Wawrzkiewicz</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
