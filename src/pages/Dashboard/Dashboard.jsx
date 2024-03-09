import './Dashboard.css';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/authContext';
import { getByRecipient } from '../../services/comment.service';

// SERVICES
import { getByIdCompany } from '../../services/company.service';
import { getById as getByIdForum } from '../../services/forum.service';
import { getById as getByIdNews } from '../../services/news.service';
import { getById } from '../../services/rating.service';
// import { LikedItems } from './LikedList.JSX';

// COMPONENTS
// import CommentedList from './CommentedList';
// import CompanyRatingList from './CompanyRatingList';
// import ListCreatedForum from './ListCreatedForum';

export const Dashboard = () => {
  const { user } = useAuth();

  // USE STATE
  const [activeTab, setActiveTab] = useState('companies');
  const [likedCompanies, setLikedCompanies] = useState([]);
  const [likedNews, setLikedNews] = useState([]);
  const [likedForum, setLikedForum] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [ratedCompanies, setRatedCompanies] = useState([]);

  // USE EFFECTS

  //* x3 use effect for LIKES per Company, Forum and News

  // COMPANIES -> getByIdCompany service function + user.likedCompany model value, from user model

  useEffect(() => {
    const fetchLikedCompaniesData = async () => {
      try {
        const likedCompaniesData = await Promise.all(
          user.likedCompany.map(async (companyId) => {
            const companyData = await getByIdCompany(companyId);
            return companyData;
          }),
        );
        setLikedCompanies(likedCompaniesData);
      } catch (error) {
        console.error('Error fetching liked companies:', error);
      }
    };

    fetchLikedCompaniesData();
  }, [user.likedCompany]);

  // NEWS -> getbyId service function + user.likedNews model value, from user model

  useEffect(() => {
    const fetchLikedNewsData = async () => {
      try {
        const likedNewsIds = user.likedNews; // Array of IDs of liked news
        const likedNewsData = await Promise.all(
          likedNewsIds.map(async (newsId) => {
            const newsData = await getByIdNews(newsId);
            return newsData;
          }),
        );
        setLikedNews(likedNewsData);
      } catch (error) {
        console.error('Error fetching liked news:', error);
      }
    };

    fetchLikedNewsData();
  }, [user.likedNews]);

  // FORUM -> getbyId service function + user.likedForum model value, from user model

  useEffect(() => {
    const fetchLikedForumData = async () => {
      try {
        const likedForumIds = user.likedForum; // Array of IDs of liked news forum
        const likedForumData = await Promise.all(
          likedForumIds.map(async (forumId) => {
            const newsData = await getByIdForum(forumId);
            return forumData;
          }),
        );
        setLikedNews(likedNewsData);
      } catch (error) {
        console.error('Error fetching liked news:', error);
      }
    };

    fetchLikedForumData();
  }, [user.likedNews]);

  //* use effect for COMMENTS per Company, Forum and News

  useEffect(() => {
    const fetchUserComments = async () => {
      try {
        // Fetch comments made by the user on news, forums, and companies
        const newsCommentsResponse = await getByRecipient('recipientNews', userId);
        const forumCommentsResponse = await getByRecipient('recipientForum', userId);
        const companyCommentsResponse = await getByRecipient('recipientCompany', userId);

        // Extract comments from the response data
        const newsComments = newsCommentsResponse.data;
        const forumComments = forumCommentsResponse.data;
        const companyComments = companyCommentsResponse.data;

        // Fetch associated data (news, forums, companies)
        const newsData = await Promise.all(
          newsComments.map((comment) => getByIdNews(comment.recipientNews)),
        );
        const forumData = await Promise.all(
          forumComments.map((comment) => getByIdForum(comment.recipientForum)),
        );
        const companyData = await Promise.all(
          companyComments.map((comment) => getByIdCompany(comment.recipientCompany)),
        );

        // Combine comments with associated data
        const userCommentsWithDetails = [
          ...newsData.map((news, index) => ({
            comment: newsComments[index],
            data: news,
          })),
          ...forumData.map((forum, index) => ({
            comment: forumComments[index],
            data: forum,
          })),
          ...companyData.map((company, index) => ({
            comment: companyComments[index],
            data: company,
          })),
        ];

        // Set state with fetched data
        setUserComments(userCommentsWithDetails);
      } catch (error) {
        console.error('Error fetching user comments:', error);
      }
    };

    fetchUserComments();
  }, []);

  //* RATINGS FOR COMPANIES

  // COMPANIES --> getByIdCompany & getById (rating) service function  + user.userCompanyRatings model value, from user model

  useEffect(() => {
    const fetchRatedCompaniesData = async () => {
      try {
        const ratedCompaniesData = await Promise.all(
          user.userCompanyRatings.map(async (ratingId) => {
            const rating = await getById(ratingId); // Fetch the rating object
            const companyData = await getByIdCompany(rating.companyId); // Fetch the company data
            const { companyName, image } = companyData;
            return { companyName, image, rating }; // Return an object containing only the needed properties
          }),
        );
        setRatedCompanies(ratedCompaniesData);
      } catch (error) {
        console.error('Error fetching rated companies data:', error);
      }
    };

    fetchRatedCompaniesData();
  }, [user.userCompanyRatings]); // run whenever the user.userCompanyRatings array changes

  //*  CREATED FORUM
  //   FORUM; // getById (FORUM) service function  + user.userForumOwner model value, from user model

  useEffect(() => {
    const fetchUserCreatedForums = async () => {
      try {
        const userCreatedForumsData = await Promise.all(
          user.forumOwner.map(async (forumId) => {
            const forumData = await getById(forumId);
            return {
              id: forumData._id,
              title: forumData.title,
              image: forumData.image,
              content: forumData.content,
            };
          }),
        );
        setUserCreatedForums(userCreatedForumsData);
      } catch (error) {
        console.error('Error fetching user created forums:', error);
      }
    };

    fetchUserCreatedForums();
  }, [user.forumOwner]);

  //* event handler for tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'companies':
        return (
          <div>
            <LikedItems itemType="Companies" items={likedCompanies} />
            {/* <CompanyRatingList items={ratedCompanies} />
            <CommentedList
              comments={userComments.filter(
                (comment) => comment.recipientType === 'Company',
              )}
            /> */}
          </div>
        );
      case 'news':
        return (
          <div>
            {/* <LikedList itemType="News" items={likedNews} />
            <CommentedList
              comments={userComments.filter(
                (comment) => comment.recipientType === 'News',
              )}
            /> */}
          </div>
        );
      case 'forum':
        return (
          <div>
            {/* <LikedList itemType="Forum Posts" items={likedForumPosts} />
            <CommentedList
              comments={userComments.filter(
                (comment) => comment.recipientType === 'Forum',
              )}
            />
            <ListCreatedForum items={createdForumPosts} /> */}
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <h1>User Dashboard</h1>
      <div>
        <button onClick={() => handleTabChange('companies')}>Companies</button>
        <button onClick={() => handleTabChange('news')}>News</button>
        <button onClick={() => handleTabChange('forum')}>Forum</button>
      </div>
      {renderContent()}
    </div>
  );
};
