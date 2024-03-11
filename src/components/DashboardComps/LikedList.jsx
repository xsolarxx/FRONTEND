import { useNavigate } from 'react-router-dom';

export const LikedList = ({ type }) => {
  console.log('🚀 ~ LikedList ~ type:', type);
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate(`/companyDetail/${type._id}`);
  };

  return (
    <div>
      {/* <img src={type.user.image} /> image here */}
      <div>
        <h3> company name: {type.user.likedCompany} </h3>
        {/* <p> type: {type.companyType}</p>
        <button className="button--blue" onClick={handleReadMore}>
          Read More
        </button> */}
      </div>
    </div>
  );
};
