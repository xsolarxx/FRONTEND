import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router';
import './Company.css';
import { Uploadfile } from '../../components';
import { useAuth } from '../../context/authContext';
import { useCreateCompanyError } from '../../hooks';
import { createCompany } from '../../services';
import { companyTagEnum } from '../../utils';

export const Company = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okCompany, setOkCompany] = useState(false);
  const [companyServices, setCompanyServices] = useState([])

  //función que se encarga del formulario

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById('file-upload').files;

    if (inputFile.length != 0) {
      const customFormdata = {
        ...formData,
        image: inputFile[0],
        owner: user,
      };

      setSend(true);
      setRes(await createCompany(customFormdata));
      setSend(false);
    } else {
      const customFormdata = {
        ...formData,
        owner: user,
      };

      setSend(true);
      setRes(await createCompany(customFormdata));
      setSend(false);
    }
  };

  // useEffect / custom hook. Manejo de respuestas

  useEffect(() => {
    useCreateCompanyError(res, setRes, setOkCompany);
  }, [res]);

  // estados de navegación

  if (okCompany) {
    return <Navigate to="/CompanyPage" />;
  }

  return (
    <>
      <div className="company_container">
        <form className="formCompany email_container1" onSubmit={handleSubmit(formSubmit)}>
          <h4>New Company</h4>

          <div className="company-container">
            <input
              className="input_title"
              type="text"
              id="companyName"
              name="companyName"
              autoComplete="false"
              {...register('title', { required: true })}
              placeholder="Company Name"
            />
            <input
              className="input_title"
              type="text"
              id="companyType"
              name="companyType"
              autoComplete="false"
              {...register('title', { required: true })}
              placeholder="Company Type"
            />
            <textarea
              className="input_content"
              type="text"
              id="description"
              name="description"
              autoComplete="false"
              {...register('content', { required: true })}
              placeholder="About the Company"
            />
            <div className="tag_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
                Services Offered:
                </label>
                <select
                id="companyServices"
                name="companyServices"
                multiple onClick={(e)=>setCompanyServices(e.target.value)}
                >
                {companyTagEnum.map((companyServices) => (
                <option key={companyServices} value={companyServices}>
                    {companyServices}
                </option>
                ))}
                </select>
            </div>
          </div>

          <Uploadfile />

          <div className="btn_container">
            <button
              className="button--blue"
              type="submit"
              disabled={send}
              style={{ background: send ? '' : 'color-disabled-green' }}
            >
              Create Company
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
