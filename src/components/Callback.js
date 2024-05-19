import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extraer el token de acceso de la URL.
    const hash = window.location.hash;
    let token = new URLSearchParams(hash.substring(1)).get('access_token');

    if (token) {
      // Almacenar el token de acceso en localStorage para su uso en otras solicitudes API.
      localStorage.setItem('spotify_access_token', token);
      // Redirigir al usuario al Dashboard.
      navigate('/dashboard');
    } else {
      // Si no hay token, redirigir al usuario a la página de inicio de sesión.
      navigate('/');
    }
  }, [navigate]);

  // No es necesario renderizar nada en pantalla para este componente.
  return null;
};

export default Callback;
