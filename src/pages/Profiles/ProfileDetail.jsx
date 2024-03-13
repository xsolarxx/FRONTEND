import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getByIdPopulate } from '../../services/user.service';
import { ProfileDetailCard } from '../../components/Cards/ProfileDetailCard';

export const ProfileDetail = () => {
  const { id } = useParams();
  const [randomUser, setRandomUser] = useState();

  const getRandomUser = async () => {
    const user = await getByIdPopulate(id);
    setRandomUser(user);
  };

  useEffect(() => {
    getRandomUser();
  }, [id]);

  console.log('este es el random', randomUser);

  return (
    <>
      <div>
        {randomUser?.data && <ProfileDetailCard profileData={randomUser?.data} />}
      </div>
    </>
  );
};
