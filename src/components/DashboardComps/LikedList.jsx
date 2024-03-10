import { useNavigate } from 'react-router-dom';

export const LikedList = ({ type }) => {
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate(`/companyDetail/${type._id}`);
  };
  return (
    <div>
      <img src={type.image} alt={type.name} /> image here
      <div>
        <h3> company name: {type.companyName} </h3>
        <p> type: {type.companyType}</p>
        <button className="button--blue" onClick={handleReadMore}>
          Read More
        </button>
      </div>
    </div>
  );
};
