import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";


export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setCategories(res.data.categories);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/home");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        categories,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };


  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
                {updateMode ? (<div className="d">
                  <input
        type="radio"
        value= "Motoryzacja"
        id="Motoryzacja"
        className="singlePostTitleInput"
        autoFocus
        onChange={(e) => setCategories(e.target.value)}
      />  <label for="Motoryzacja">Motoryzacja</label>


                  <input
          type="radio"
          value= "Muzyka"
          id="Muzyka"
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setCategories(e.target.value)}
        />  <label for="Muzyka">Muzyka</label>

<input
        type="radio"
        value= "Styl"
        id="Styl"
        className="singlePostTitleInput"
        autoFocus
        onChange={(e) => setCategories(e.target.value)}
      />  <label for="Styl">Styl</label>

<input
        type="radio"
        value= "Sport"
        id="Sport"
        className="singlePostTitleInput"
        autoFocus
        onChange={(e) => setCategories(e.target.value)}
      />  <label for="Sport">Sport</label>

<input
        type="radio"
        value= "Gwiazdy"
        id="Gwiazdy"
        className="singlePostTitleInput"
        autoFocus
        onChange={(e) => setCategories(e.target.value)}
      />  <label for="Gwiazdy">Gwiazdy</label>

<input
        type="radio"
        value= "Kuchnia"
        id="Kuchnia"
        className="singlePostTitleInput"
        autoFocus
        onChange={(e) => setCategories(e.target.value)}
      />  <label for="Kuchnia">Kuchnia</label>

        
                </div>
                
                
              
          
        ) : (
          <div></div>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Właściciel : 
            <Link to={`/home?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
            
          </span>
          <span>
            Kategoria postu : 
          <Link to={`/home?cat=${post.categories}`} className="link">
              <b> {post.categories}</b>
           </Link>
          </span>

        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Zaktualizuj
          </button>
        )}
      </div>
    </div>
  );
}
