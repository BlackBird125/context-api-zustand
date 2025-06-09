import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

export const HomePage = () => {
  const { username, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="content-box">
        <h1>ようこそ {username} さん！</h1>
        <button onClick={handleLogout} className="button button-red">
          ログアウト
        </button>
      </div>
    </div>
  );
};