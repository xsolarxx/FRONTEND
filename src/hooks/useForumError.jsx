import Swal from 'sweetalert2/dist/sweetalert2.all';

export const useForumError = (res, setRes, setOkForum) => {
  //200
  if (res?.status == 200) {
    setOkForum(() => true);

    Swal.fire({
      icon: 'success',
      title: 'Forum created',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  // 404
  if (res?.response?.data?.includes('Error tipo catch al crear el foro')) {
    Swal.fire({
      icon: 'error',
      title: 'NOPE!',
      text: 'Create forum fail',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  if (res?.response?.data?.includes('Error tipo catch encontrado al crear el foro')) {
    Swal.fire({
      icon: 'error',
      title: 'NOPE!',
      text: 'General error creating the forum',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
};
