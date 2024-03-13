import React, { useState, useEffect } from 'react';
import { Rating } from 'primereact/rating';
import { createRating } from '../../services/rating.service';
import { useAuth } from '../../context/authContext';

export const RatingComponent = ({ idCompany }) => {
  const { user, setUser } = useAuth();
  const [rating, setRating] = useState(
    user.companyPunctuated.find((item) => item === idCompany),
  );

  const handleRatingChange = async (e) => {
    console.log('rating', rating);
    setRating(e.value); // Actualiza el estado con la nueva calificación

    try {
      const formData = {
        punctuation: e.value,
        companyPunctuated: idCompany,
      };

      const res = await createRating(formData);
      console.log('soy la respuesta', res);
      const { token } = user;
      const updatedUser = {
        name: res?.data?.user?.userName,
        email: res?.data?.user?.email,
        image: res?.data?.user?.image,
        check: res?.data?.user?.check,
        _id: res?.data?.user?._id,
        likedCompany: res?.data?.user?.likedCompany,
        comments: res?.data?.user?.comments,
        companyPunctuated: res?.data?.user?.companyPunctuated,
        ownerRating: res?.data?.user?.ownerRating,
        favComments: res?.data?.user?.favComments,
        likedForum: res?.data?.user?.likedForum,
        likedNews: res?.data?.user?.likedNews,
        forumOwner: res?.data?.user?.forumOwner,
        forumFollowing: res?.data?.user?.forumFollowing,
        usersFollowed: res?.data?.user?.usersFollowed,
        token,
      };
      setUser(() => updatedUser);

      console.log('Calificación creada en el servidor:', res);
    } catch (error) {
      console.error('Error al crear la calificación:', error);
      // Maneja el error según sea necesario
    }
  };

  return (
    <div className="card flex justify-content-center">
      <Rating value={rating} onChange={handleRatingChange} cancel={false} />
    </div>
  );
};
