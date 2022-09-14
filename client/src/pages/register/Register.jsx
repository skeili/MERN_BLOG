import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Rejestracja</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Nazwa użytkownika</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Wpisz nazwę..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>E-mail</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Wpisz e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Hasło</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Wpisz hasło..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Zarejestruj
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Masz już konto?
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Coś poszło nie tak!</span>}
    </div>
  );
}
