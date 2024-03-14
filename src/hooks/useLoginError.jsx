// import Swal
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
export const useLoginError = (res, setRes, userLogin, setLoginOk) => {
  //! -----------------200

  if (res?.status == 200) {
    /** me creo un objeto que es lo que quiero meter luego en el localStorage */
    const dataCustom = {
      token: res.data.token,
      name: res.data.user.userName,
      email: res.data.user.email,
      image: res.data.user.image,
      check: res.data.user.check,
      _id: res.data.user._id,
      likedCompany: res.data.user.likedCompany,
      likedForum: res.data.user.likedForum,
      likedNews: res.data.user.likedNews,
      companyPunctuated: res.data.user.companyPunctuated,
      comments: res.data.user.comments,
      ownerRating: res.data.user.ownerRating,
      favComments: res.data.user.favComments,
      forumOwner: res.data.user.forumOwner,
      forumFollowing: res.data.user.forumFollowing,
      usersFollowed: res.data.user.usersFollowed,
      usersFollowers: res.data.user.usersFollowers,
    };
    /** lo convierto en string porque la funcion de login lo va a meter en el localStorage directamente y luego lo mete en
     * estado del user del contexto
     */
    const stringUser = JSON.stringify(dataCustom);
    userLogin(stringUser);

    /** pongo el estado de loginOk a true para que asi la pagina vea que tiene que hacer cuando el login esta correcto */
    setLoginOk(() => true);

    Swal.fire({
      icon: 'success',
      title: 'Welcome to my Page',
      text: 'Login ok ✅',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //! ----------------- 404: 'User no register'

  if (res?.response?.data?.includes('User no register')) {
    setRes(() => ({}));
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Unregistered user ❎',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //!------------------ 404: 'password dont match'

  if (res?.response?.data?.includes('password dont match')) {
    setRes(() => ({}));
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Password dont match ❎',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //! ----------------- 500
  if (res?.response?.status == 500) {
    setRes(() => ({}));
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Interval Server Error ❎!',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
