import Swal from 'sweetalert2/dist/sweetalert2.all';

export const useCommentError = (
  resComment,
  setResComment,
  setUpdateComments,
  user,
  setUser,
) => {
  //200
  console.log('esta es res', resComment);
  if (resComment?.status == 200) {
    const { token } = user;

    const userUpdate = {
      name: resComment?.data?.user?.userName,
      email: resComment?.data?.user?.email,
      image: resComment?.data?.user?.image,
      check: resComment?.data?.user?.check,
      _id: resComment?.data?.user?._id,
      likedCompany: resComment?.data?.user?.likedCompany,
      comments: resComment?.data?.user?.comments,
      favComments: resComment?.data?.user?.favComments,
      likedForum: resComment?.data?.user?.likedForum,
      likedNews: resComment?.data?.user?.likedNews,
      forumOwner: resComment?.data?.user?.forumOwner,
      forumFollowing: resComment?.data?.user?.forumFollowing,
      usersFollowed: resComment?.data?.user?.usersFollowed,
      usersFollowers: resComment?.data?.user?.usersFollowers,
      ownerRating: resComment?.data?.user?.ownerRating,
      companyPunctuated: resComment?.data?.user?.companyPunctuated,
      token,
    };
    setUser(() => userUpdate);
    console.log('usto es USERUPDATE', userUpdate);
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(userUpdate));
    setResComment(() => true);

    Swal.fire({
      icon: 'success',
      title: 'Comment sent',
      showConfirmButton: false,
      timer: 1500,
    });
    setResComment({});
    setUpdateComments((preValue) => !preValue);
  }

  // 404
  if (resComment?.response?.status == 404) {
    Swal.fire({
      icon: 'error',
      title: 'Comment creation fail',
      showConfirmButton: false,
      timer: 1500,
    });
    setResComment({});
  }
};
