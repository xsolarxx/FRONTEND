import React, { useState, useEffect } from 'react';
import { Rating } from 'primereact/rating';
import { createRating } from '../../services/rating.service';
import { useAuth } from '../../context/authContext';
import Swal from 'sweetalert2';
import './Rating.css';

export const RatingComponent = ({ company }) => {
  const { user, setUser } = useAuth();
  const foundRating = company.userCompanyRatings.find(
    (item) => item.userPunctuation == user._id,
  );

  const [rating, setRating] = useState(foundRating ? foundRating.punctuation : null);

  const handleRatingChange = async (e) => {
    console.log('rating', rating);

    try {
      const formData = {
        punctuation: e.value,
        companyPunctuated: company._id,
      };

      const res = await createRating(formData);
      console.log('soy la respuesta', res);
      if (res.status !== 200) {
        Swal.fire({
          icon: 'error',
          title: `${res.response.data}`,
          text: 'Please, try again',
          showConfirmButton: false,
          timer: 2500,
        });
        // Aqui meter swal informando de porque no puede volver a puntuar
        return;
      }
      setRating(e.value); // Actualiza el estado con la nueva calificación
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
        usersFollowers: res?.data?.user?.usersFollowers,
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
    <div className="rating">
      <Rating value={rating} onChange={handleRatingChange} cancel={false} />
    </div>
  );
};
