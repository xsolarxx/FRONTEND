import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import { toggleLikedCompany } from '../../services/user.service';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LikeCompany = ({ id }) => {
  const { user, setUser } = useAuth();

  const [like, setLike] = useState(!!user.likedCompany.find((item) => item._id == id));

  const handleLikeClick = async () => {
    console.log('entro like', like);
    if (user) {
      const likedCompanyRes = await toggleLikedCompany(id);
      setUser(() => likedCompanyRes.data.user);
      setLike(!!likedCompanyRes.data.user.likedCompany.find((item) => item._id == id));
    }
  };

  return (
    <div>
      {user && (
        <button onClick={handleLikeClick}>
          <FontAwesomeIcon icon={like ? solidHeart : regularHeart} />
        </button>
      )}
    </div>
  );
};

// export const LikeCompany = ({ id }) => {
//   const { user, setUser } = useAuth();
//   console.log('user', user);

//   // Determina se o usuário curtiu a empresa
//   const [like, setLike] = useState(user.likedCompany.some((item) => item._id === id));

//   const handleLikeClick = async () => {
//     if (user) {
//       const likedCompany = await toggleLikedCompany(id);
//       setUser(likedCompany.data.user);
//       setLike(likedCompany.data.like);
//     }
//   };

//   return (
//     <div>
//       {user && (
//         <button onClick={handleLikeClick}>
//           <FontAwesomeIcon icon={like ? solidHeart : regularHeart} />
//         </button>
//       )}
//     </div>
//   );
// };
