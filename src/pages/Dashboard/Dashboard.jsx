import './Dashboard.css';
import { useEffect, useState } from 'react';
import { getByIdPopulate } from '../../services/user.service';
import { useAuth } from '../../context/authContext';
import { useParams } from 'react-router-dom';
import { LikedList } from '../../components';

export const Dashboard = () => {
  const { user, setUser } = useAuth();

  const fetchUserData = async () => {
    const userData = await getByIdPopulate(user._id);
    setUser(userData);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <h2>User Dashboard</h2>

          {/* Si hay interacciones del usuario, mapearlas */}
          {user.interactions && user.interactions.length > 0 && (
            <div>
              <h3>Interactions:</h3>
              {user.interactions.map((interaction) => (
                <LikedList key={interaction._id} type={interaction} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
