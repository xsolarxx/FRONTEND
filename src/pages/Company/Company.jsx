import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router';
import './Company.css';
import { Uploadfile } from '../../components';
import { useAuth } from '../../context/authContext';
import { useCreateCompanyError } from '../../hooks';
import { createCompany } from '../../services';

export const Company = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [okCompany, setOkCompany] = useState(false);

  //función que se encarga del formulario

  const formSubmit = async (formData) => {
    const inputFile = document.getElementById('file-upload').files;
    console.log('formData',formData)
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
    return <Navigate to="/Company" />;
  }

  return (
    <>
      <div className="company_container">
        <form className="formCompany email_container1" onSubmit={handleSubmit(formSubmit)}>
          <h4>New Company</h4>
          <input
            className="input_title"
            type="text"
            id="companyName"
            name="companyName"
            autoComplete="false"
            {...register('companyName', { required: true })}
            placeholder="Company Name"
          />
          <input
            className="input_title"
            type="text"
            id="companyType"
            name="companyType"
            autoComplete="false"
            {...register('companyType', { required: true })}
            placeholder="Company Type"
          />
          <textarea
            className="input_content"
            type="text"
            id="description"
            name="description"
            autoComplete="false"
            {...register('description', { required: true })}
            placeholder="About the Company"
          />
          <div className="companyServices_container form-group">
            <div className="companyServices_Conainter">
              <h5>Choose as many services as you want:</h5>
              <input
                type="checkbox"
                name="companyServices"
                id="companyServices"
                value="Installation budget"
                {...register("companyServices")}
              />
              <label htmlFor="Installation budget" className="label-checkbox Installation budget">
              Installation budget
              </label>
              <input
                type="checkbox"
                name="companyServices"
                id="photovoltaicPanelBudget"
                value="Photovoltaic panel budget"
                {...register("companyServices")}
              />
              <label htmlFor="photovoltaicPanelBudget" className="label-checkbox photovoltaicPanelBudget">
                Photovoltaic panel Budget
              </label>

              <input
                type="checkbox"
                name="companyServices"
                id="energyStudy"
                value="Energy study"
                {...register("companyServices")}
              />
              <label htmlFor="energyStudy" className="label-checkbox energyStudy">
                Energy study
              </label>

              <input
                type="checkbox"
                name="companyServices"
                id="maintenance"
                value="Maintenance"
                {...register("companyServices")}
              />
              <label htmlFor="maintenance" className="label-checkbox maintenance">
                Maintenance
              </label>

              <input
                type="checkbox"
                name="companyServices"
                id="sizingAndModeling"
                value="Sizing and modeling of the installation"
                {...register("companyServices")}
              />
              <label htmlFor="sizingAndModeling" className="label-checkbox sizingAndModeling">
                Sizing and modeling of the installation
              </label>

              <input
                type="checkbox"
                name="companyServices"
                id="safetyStudy"
                value="Safety study"
                {...register("companyServices")}
              />
              <label htmlFor="safetyStudy" className="label-checkbox safetyStudy">
                Safety study
              </label>

              <input
                type="checkbox"
                name="companyServices"
                id="others"
                value="Others"
                {...register("companyServices")}
              />
              <label htmlFor="others" className="label-checkbox others">
                Others
              </label>
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
