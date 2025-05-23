import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './CommunityLogin.css';

export default function CommunityLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthCookie, setUsernameCookie, setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://logic-sc.top/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      if (!response.ok) {
        throw new Error('认证失败');
      }
      
      const data = await response.json();
      setAuthCookie(data.token);
      setUsernameCookie(data.username);
      setIsAuthenticated(true);
      alert('登录成功');
    } catch (error) {
      console.error('认证错误:', error);
      alert('登录失败，请检查用户名和密码');
    }
  };

  return (
    <div className="login-container">
      <h2>社区登录</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>用户名:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>密码:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  );
}