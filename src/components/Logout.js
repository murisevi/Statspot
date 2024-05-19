import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Aquí podrías también limpiar cualquier otra parte del estado global si lo usas
    localStorage.removeItem('spotify_access_token');
    navigate('/'); // Redirige al usuario a la página de inicio de sesión
  }, [navigate]);

  return null; // No es necesario renderizar nada
};

export default Logout;
