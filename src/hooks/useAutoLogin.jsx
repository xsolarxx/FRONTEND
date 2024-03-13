import { Navigate } from 'react-router-dom';

import { autoLogin } from '../services/user.service';

export const useAutoLogin = async (allUser, userLogin) => {
  try {
    const { password, email } = allUser.data.user;
    const customFormData = {
      email,
      password,
    };

    const sendData = await autoLogin(customFormData);

    if (sendData?.status == 200) {
      console.log('entro', sendData.data.user);
      const {
        userName,
        email,
        image,
        check,
        likedCompany,
        likedForum,
        likedNews,
        companyPunctuated,
        comments,
        favComments,
        ownerRating,
        forumOwner,
        forumFollowing,
        usersFollowed,
      } = sendData.data.user;
      const userCustom = {
        token: sendData.data.token,
        user: userName,
        email,
        likedCompany,
        companyPunctuated,
        comments,
        ownerRating,
        favComments,
        likedNews,
        likedForum,
        image,
        check,
        forumOwner,
        forumFollowing,
        usersFollowed,
        _id: sendData.data.user._id,
      };

      const stringUser = JSON.stringify(userCustom);
      userLogin(stringUser);
      return <Navigate to="/dashboard" />;
    } else {
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.log(error);
  }
};
