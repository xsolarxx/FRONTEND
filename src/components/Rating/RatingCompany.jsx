import React, { useState, useEffect } from 'react';
import { createRating, getById } from '../../services/rating.service'; // Asegúrate de importar el servicio adecuado
import { useAuth } from '../../context/authContext'; // Importa el hook useAuth según tu implementación

export const RatingComponent = ({ companyId }) => {
  const { user, setUser } = useAuth();
  console.log('entro aqui', user);
  const [rated, setRated] = useState(false); // Estado para indicar si el usuario ha evaluado la empresa
  const [rating, setRating] = useState(0); // Estado para almacenar la puntuación seleccionada por el usuario

  useEffect(() => {
    const fetchRating = async () => {
      if (user) {
        try {
          // Obtiene la calificación del usuario para esta empresa
          const response = await getById(companyId);
          if (response.status === 200) {
            const { rating } = response.data;
            setRating(rating);
            setRated(true);
          }
        } catch (error) {
          console.error('Error al obtener la calificación:', error);
        }
      }
    };

    fetchRating();
  }, [companyId, user]);

  const handleRatingClick = async (value) => {
    if (user) {
      try {
        // Crea un objeto de datos con la puntuación seleccionada y la empresa asociada
        const formData = {
          punctuation: value,
          companyPunctuated: companyId,
        };

        // Llama a la función para crear una nueva evaluación o actualizar la existente
        const response = await createRating(formData);

        // Si la evaluación es exitosa, actualiza el estado local de rated y rating
        if (response.status === 200) {
          setRated(true); // Indica que el usuario ha evaluado la empresa
          setRating(value); // Almacena la puntuación seleccionada por el usuario

          // Actualiza el estado local del usuario con los datos actualizados
          const updatedUser = {
            ...user,
            companyPunctuated: [...user.companyPunctuated, companyId], // Agrega el companyId al array companyPunctuated
          };

          // Actualiza el estado global del usuario en el contexto de autenticación
          setUser(updatedUser);

          // Actualiza el almacenamiento local con los datos actualizados del usuario
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }
      } catch (error) {
        console.error('Error al guardar la evaluación:', error);
        // Maneja el error, si es necesario
      }
    }
  };
  return (
    <div>
      <div>
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleRatingClick(index + 1)}
            disabled={!user || rated} // Deshabilita los botones si el usuario no está autenticado o ya ha evaluado la empresa
            style={{ color: index < rating ? '#f90' : '#aaa' }} // Cambia el color de las estrellas seleccionadas por el usuario
          >
            &#9733;
          </button>
        ))}
      </div>
      {user && <p>Your rating for this company:{rating} </p>}
    </div>
  );
};
