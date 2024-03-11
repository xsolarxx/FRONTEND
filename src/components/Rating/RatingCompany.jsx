import React, { useState, useEffect } from 'react';
import { createRating } from '../../services/rating.service';
import { useAuth } from '../../context/authContext';

export const RatingComponent = ({ companyId }) => {
  const { user, setUser } = useAuth();
  console.log('entro', user);

  const [rating, setRating] = useState(
    !!user.companyPunctuated?.find((item) => item === companyId),
  );

  const handleRatingClick = async (value) => {
    const formData = { punctuation: value, companyPunctuated: companyId };
    if (user) {
      try {
        const res = await createRating(formData);
        console.log('entro resssss', res);
        const { token } = user;
        const updatedUser = {
          name: res.data.user.userName,
          email: res.data.user.email,
          image: res.data.user.image,
          check: res.data.user.check,
          _id: res.data.user._id,
          companyPunctuated: res.data.user.companyPunctuated,
          ownerRating: res.data.user.ownerRating,
          likedCompany: res.data.user.likedCompany,
          likedForum: res.data.user.likedForum,
          likedNews: res.data.user.likedNews,
          token,
        };
        setUser(() => updatedUser);
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setRating(!!res.data.user.companyPunctuated.find((item) => item === companyId));
      } catch (error) {
        console.error('Error saving rating:', error);
      }
    }
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleRatingClick(index + 1)}
          disabled={!user || rating}
          style={{ color: index < rating ? '#f90' : '#aaa' }}
        >
          &#9733;
        </button>
      ))}
      {user && <p>{rating}</p>}
    </div>
  );
};
