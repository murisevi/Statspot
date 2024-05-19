import React from 'react';
import './LoginPage.css'; // Asegúrate de crear y enlazar este archivo CSS

const LoginPage = () => {
  const CLIENT_ID = 'c089dddde19a4a1c8f202dfb82a3d5f5';  // Reemplaza con tu Client ID de Spotify
  const REDIRECT_URI = 'http://localhost:3000/callback';  // Asegúrate de que esta URI está registrada en tu Dashboard de Spotify
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const SCOPE = 'streaming user-read-email user-read-private';

  const handleLogin = () => {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
  };

  return (
    <div className="login-container">
      <h1>Welcome to Spotify Stats</h1>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default LoginPage;
