import Swal from 'sweetalert2/dist/sweetalert2.all';

export const useCreateCompanyError = (res, setRes, setOkCompany) => {
  //200
  console.log ('que es RES',res)
  if (res?.status == 200) {
    setOkCompany(() => true);

    Swal.fire({
      icon: 'success',
      title: 'Company created',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }

  // 404
  if (typeof res?.response?.data === 'string' && res?.response?.data?.includes('Error tipo catch al crear la empresa')) {
    Swal.fire({
      icon: 'error',
      title: 'NOPE!',
      text: 'Create company failed',
      showConfirmButton: false,
      timer: 1500,
    });
    console.log('Buscando error',data)
    setRes({});
  }

  if (typeof res?.response?.data === 'string' && res?.response?.data?.includes('Error tipo catch encontrado al crear la empresa')) {
    Swal.fire({
      icon: 'error',
      title: 'NOPE!',
      text: 'General error creating new company',
      showConfirmButton: false,
      timer: 1500,
    });
    setRes({});
  }
};
