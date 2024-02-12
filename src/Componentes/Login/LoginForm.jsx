import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import "../Login/LoginForm.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [nameForBanner, setNameForBanner] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && email) {
      setLoggedIn(true);
      setNameForBanner(username); // Guarda el nombre del usuario para el Banner
    } else {
      alert('Por favor ingresa un nombre y un correo electrónico.');
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <label>
            Nombre:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Correo Electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Iniciar Sesión</button>
        </form>
      ) : (
        <div>
          <h2>Bienvenido, {username}!</h2>
          <p>Correo Electrónico: {email}</p>
          <Banner name={nameForBanner} />
        </div>
      )}
    </div>
  );
};

export default Login;
