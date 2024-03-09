import React, { useState } from 'react';
import { createRating } from '../../services/rating.service'; // Asegúrate de importar el servicio adecuado

export const RatingComponent = ({ companyPunctuated, user }) => {
  const [rating, setRating] = useState(0); // Estado para almacenar la puntuación seleccionada

  const handleRatingChange = async (value) => {
    try {
      const formData = {
        punctuation: value,
        companyPunctuated: companyPunctuated,
      };

      const response = await createRating(formData);

      // Si la puntuación se guarda correctamente, actualiza el estado del rating
      if (response.status === 200) {
        setRating(value);
        // Aquí puedes realizar otras acciones según tus necesidades, como actualizar la interfaz de usuario
      }
    } catch (error) {
      console.error('Error al guardar el rating:', error);
      // Aquí puedes manejar el error de alguna manera, por ejemplo, mostrando un mensaje al usuario
    }
  };

  return (
    <div>
      <h2>Rating para {companyPunctuated}</h2>
      <div>
        {[...Array(5)].data.map((_, index) => (
          <button
            key={index}
            onClick={() => handleRatingChange(index + 1)}
            disabled={user.companyPunctuated.includes(companyPunctuated)}
            style={{ color: index < rating ? '#f90' : '#aaa' }}
          >
            &#9733;
          </button>
        ))}
      </div>
      {user?.companyPunctuated && user.companyPunctuated.includes(companyPunctuated) && (
        <p>¡Ya has puntuado esta empresa!</p>
      )}
    </div>
  );
};
