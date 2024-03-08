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
      const { userName, email, image, check, likedCompany, likedForum, likedNews } = sendData.data.user;
      const userCustom = {
        token: sendData.data.token,
        user: userName,
        email,
        likedCompany,
        likedNews,
        likedForum,
        image,
        check,
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
