import { Swal } from 'sweetalert2/dist/sweetalert2.all';

export const useCommentError = (res, setRes, setResComment) => {
  //200
  if (res?.status == 200) {
    setResComment(() => true);

    Swal.fire({
      icon: 'success',
      title: 'Comment sent',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  // 404
  if (res?.response?.status == 404) {
    Swal.fire({
      icon: 'error',
      title: 'Comment creation fail',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
};
