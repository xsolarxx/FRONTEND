export const LikedList = ({ type }) => {
  console.log('🚀 ~ LikedList ~ type:', type);
  return (
    <div>
      <h3> Company name: {type.likedCompany} </h3>
    </div>
  );
};
