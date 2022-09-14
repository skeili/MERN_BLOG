import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      categories,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Tytuł"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          /><div className="d"><input
          type="radio"
          value= "Motoryzacja"
          id="Motoryzacja"
          name="x"
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setCategories(e.target.value)}
        />  <label for="Motoryzacja">Motoryzacja</label></div>
        
           <div className="d">
           <input
          type="radio"
          value= "Muzyka"
          id="Muzyka"
          name="x"
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setCategories(e.target.value)}
        />  <label for="Muzyka">Muzyka</label>
           </div>
           
           <div className="d">
           <input
          type="radio"
          value= "Styl"
          id="Styl"
          name="x"
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setCategories(e.target.value)}
        />  <label for="Styl">Styl</label>
           </div>

           <div className="d">
           <input
          type="radio"
          value= "Sport"
          id="Sport"
          name="x"
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setCategories(e.target.value)}
        />  <label for="Sport">Sport</label>
           </div>
          
           <div className="d">
           <input
          type="radio"
          value= "Gwiazdy"
          id="Gwiazdy"
          name="x"
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setCategories(e.target.value)}
        />  <label for="Gwiazdy">Gwiazdy</label>
           </div>

           <div className="d">
           <input
          type="radio"
          value= "Kuchnia"
          id="Kuchnia"
          name="x"
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setCategories(e.target.value)}
        />  <label for="Kuchnia">Kuchnia</label>
           </div>
        </div>
        <h2>Kategoria</h2>
        <div className="writeFormGroup">
          <textarea
            placeholder="Opisz swoją przygodę..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Upublikuj
        </button>
      </form>
    </div>
  );
}
