import Swal from 'sweetalert2/dist/sweetalert2.all';

export const useCommentError = (resComment, setResComment, setUpdateComments) => {
  //200
  console.log('esta es res', resComment);
  if (resComment?.status == 200) {
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
