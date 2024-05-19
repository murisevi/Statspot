import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const defaultImage = "https://example.com/default_profile_image.png";
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('spotify_access_token');
    if (!token) {
      navigate('/');
      return; // Esto previene que el código adicional se ejecute si no hay token
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        navigate('/');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <img 
        src={userProfile.images.length > 0 && userProfile.images[0].url ? userProfile.images[0].url : defaultImage}
        alt="Profile"
        className="profile-image"
      />
      <h1 className="greeting">Welcome, {userProfile.display_name}</h1>
      <div className="info">
        <p><strong>Email:</strong> {userProfile.email}</p>
        <p><strong>Country:</strong> {userProfile.country}</p>
        <p><strong>Followers:</strong> {userProfile.followers.total.toLocaleString()}</p>
        <p><strong>Account type:</strong> {userProfile.product}</p>
      </div>
    </div>
  );
};

export default Dashboard;
