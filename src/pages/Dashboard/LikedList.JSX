// // SERVICES
// import { getByIdCompany } from '../../services/company.service';
// import { getById as getByIdForum } from '../../services/forum.service';
// import { getById as getByIdNews } from '../../services/news.service';
// import React, { useState, useEffect } from 'react';

// export const LikedItems = ({ type, items }) => {
//   const [likedItems, setLikedItems] = useState([]);

//   useEffect(() => {
//     const fetchLikedItemsData = async () => {
//       try {
//         let likedItemsData = [];

//         switch (type) {
//           case 'companies':
//             likedItemsData = await Promise.all(
//               items.map(async (itemId) => {
//                 const companyData = await getByIdCompany(itemId);
//                 return companyData;
//               }),
//             );
//             break;
//           case 'news':
//             likedItemsData = await Promise.all(
//               items.map(async (itemId) => {
//                 const newsData = await getByIdNews(itemId);
//                 return newsData;
//               }),
//             );
//             break;
//           case 'forum':
//             likedItemsData = await Promise.all(
//               items.map(async (itemId) => {
//                 const forumData = await getByIdForum(itemId);
//                 return forumData;
//               }),
//             );
//             break;
//           default:
//             console.error('Invalid type:', type);
//             break;
//         }

//         setLikedItems(likedItemsData); // Set the fetched data to the state
//       } catch (error) {
//         console.error(`Error fetching liked ${type}:`, error);
//       }
//     };

//     fetchLikedItemsData(); // Call the fetchLikedItemsData function
//   }, [type, items]);

//   return (
//     <div>
//       <h2>Liked {type}</h2>
//       <ul>
//         {likedItems.map((item) => (
//           <li key={item.id}>
//             <img src={item.image} alt={item.title} />
//             <p>{item.title}</p>
//             {type === 'companies' && <p>Type: {item.type}</p>}
//             {type === 'news' && <p>Timestamp: {item.timestamp}</p>}
//             {type === 'forum' && <p>Category: {item.category}</p>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
