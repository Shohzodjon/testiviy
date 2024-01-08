import "../assets/styles/auth-modal.css";
import { useState } from "react";
const AuthModal = () => {
  const initialPassword = "Oybek";
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [close, setClose] = useState(false);

  const handlePassword = (e) => {
    setPassword(e);
    setError(false);
  };

  const handleSubmit = () => {
    if (initialPassword === password) {
      setError(false);
      setClose(true);
    } else {
      setError(true);
      setClose(false);
    }
  };

  return (
    <section className={close ? "remove__modal" : "auth__modal"}>
      <div className="modal__flex">
        <ul>
          <li>
            <h4>Login</h4>
          </li>
          <li>
            <label htmlFor="user__name">User name</label>
          </li>
          <li>
            <input
              type="text"
              id="user__name"
              placeholder="Enter name ... "
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="user__password">User password</label>
          </li>
          <li>
            <input
              type="password"
              id="user__password"
              placeholder="Enter password ... "
              onChange={(e) => handlePassword(e.target.value)}
            />
          </li>
          <li>
            <span className={error ? "error" : ""}>Something is wrong</span>
          </li>
          <li>
            <button onClick={handleSubmit}>Login</button>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default AuthModal;
