import { useNavigate } from 'react-router';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
export const useUpdateError = (res, setRes, user, setUser, setUpdatedUser) => {
  //!---------------------------------------> 200
  let contador;
  if (res?.data) {
    contador = 0;
    res?.data?.testUpdate?.map((item) => {
      for (let clave in item) {
        if (item[clave] == false) {
          contador++;
        }
      }
    });
  }
  console.log(contador);
  if (contador == 0) {
    let check = '';

    res?.data?.testUpdate?.forEach((item) => {
      for (let clave in item) {
        if (item[clave] == true) {
          check += `-${clave}-`;
        }
      }
    });
    if (res?.status == 200) {
      console.log('res en hook', res);
      const { token } = user;
      const userUpdate = {
        name: res?.data?.updateUser?.userName,
        email: res?.data?.updateUser?.email,
        image: res?.data?.updateUser?.image,
        check: res?.data?.updateUser?.check,
        _id: res?.data?.updateUser?._id,
        likedCompany: res?.updateUser?.user?.likedCompany,
        comments: res?.data?.updateUser?.comments,
        favComments: res?.data?.updateUser?.favComments,
        likedForum: res?.data?.updateUser?.likedForum,
        likedNews: res?.data?.updateUser?.likedNews,
        forumOwner: res?.data?.updateUser?.forumOwner,
        forumFollowing: res?.data?.updateUser?.forumFollowing,
        usersFollowed: res?.data?.updateUser?.usersFollowed,
        ownerRating: res?.data?.updateUser?.ownerRating,
        companyPunctuated: res?.data?.updateUser?.companyPunctuated,
        token,
      };
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(userUpdate));
      setUser(() => userUpdate);
      setUpdatedUser(() => true);
      setRes(() => ({}));

      return Swal.fire({
        icon: 'success',
        title: `Update data user✅`,
        text: ` Update: ${check} `,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  //! -------------------------------------> 404 general y el 500

  if (res?.response?.status == 500 || res?.response?.status == 404) {
    setRes(() => ({}));
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Interval Server Error! Don't update user ❎ ",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  if (contador != 0) {
    if (res?.status == 404) {
      setRes(() => ({}));
      return Swal.fire({
        icon: 'error',
        title: `Error update data user ❌`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
};
