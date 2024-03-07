// import './NavProfile.css';

// import { Link } from 'react-router-dom';

// import { useAuth } from '../../context/authContext';
// import { useDeleteUser } from '../../hooks';

// export const NavProfile = () => {
//   const { setUser, setDeleteUser, user } = useAuth();
//   return (
//     <>
//       <div className="container">
//         <Link
//           className="delete-user"
//           onClick={() => useDeleteUser(setUser, setDeleteUser)}
//           style={{ cursor: 'pointer' }}
//         >
//           Delete user
//         </Link>
//         <br></br>

//         <Link to="/profile/changePassword">Change password</Link>
//       </div>
//     </>
//   );
// };
