import { useNavigate } from 'react-router-dom';

export const LikedList = ({ type }) => {
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate(`/companyDetail/${type._id}`);
  };
  return (
    <div>
      <img src={type.image} alt={type.name} />
      <div>
        <h3>{type.companyName} </h3>
        <p>{type.companyType}</p>
        <button className="button--blue" onClick={handleReadMore}>
          Read More
        </button>
      </div>
    </div>
  );
};
