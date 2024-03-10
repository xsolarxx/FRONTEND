import Swal from 'sweetalert2/dist/sweetalert2.all';

export const useCreateNewsError = (res, setRes, setOkNews) => {
  //200
  console.log('que es RES', res);
  if (res?.status == 200) {
    setOkNews(() => true);

    Swal.fire({
      icon: 'success',
      title: 'News created',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  // 404
  if (
    typeof res?.response?.data === 'string' &&
    res?.response?.data?.includes('Error tipo catch al crear la noticia')
  ) {
    Swal.fire({
      icon: 'error',
      title: 'NOPE!',
      text: 'Create company failed',
      showConfirmButton: false,
      timer: 1500,
    });
    console.log('Buscando error', data);
    setRes({});
  }

  if (
    typeof res?.response?.data === 'string' &&
    res?.response?.data?.includes('Error tipo catch encontrado al crear la noticia')
  ) {
    Swal.fire({
      icon: 'error',
      title: 'NOPE!',
      text: 'General error creating news',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
};
