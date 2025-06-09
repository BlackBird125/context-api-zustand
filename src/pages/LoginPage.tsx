import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export const LoginPage = () => {
  const [inputUsername, setInputUsername] = useState("");
  const { login } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      login(inputUsername);
      navigate("/home");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">ユーザー名</label>
            <input
              id="username"
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder="ユーザー名を入力してください"
              required
            />
          </div>
          <button type="submit" className="button">
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
};
