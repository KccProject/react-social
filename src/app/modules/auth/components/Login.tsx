/* eslint-disable jsx-a11y/anchor-is-valid */
import { toAbsoluteUrl } from "../../../../_metronic/helpers";

const API_URL = process.env.REACT_APP_API_URL;
const URL = process.env.REACT_APP_URL;

const Redirect_URL =
  API_URL +
  "/oauth2/authorize/google?redirect_uri=" +
  URL +
  "/oauth2/redirect";

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  return (
    <form className="form w-100" noValidate id="kt_login_signin_form">
      {/* begin::Heading */}
      <div className="text-center mb-10">
        <h1 className="text-dark mb-3">Sign In to KCC ITM</h1>
        <div className="text-gray-400 fw-bold fs-4">
          {/* New Here?{' '} */}
          {/* <Link to='/auth/registration' className='link-primary fw-bolder'>
            Create an Account
          </Link> */}
        </div>
      </div>
      {/* begin::Heading */}

      {/* {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : (
        <div className='mb-10 bg-light-info p-8 rounded'>
          <div className='text-info'>
            Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
            continue.
          </div>
        </div>
      )} */}

      {/* begin::Form group */}
      {/* <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
        <input
          placeholder='Email'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div> */}
      {/* end::Form group */}

      {/* begin::Form group */}
      {/* <div className='fv-row mb-10'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
   
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
         
            <Link
              to='/auth/forgot-password'
              className='link-primary fs-6 fw-bolder'
              style={{marginLeft: '5px'}}
            >
              Forgot Password ?
            </Link>
  
          </div>
        </div>
        <input
          type='password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div> */}
      {/* end::Form group */}

      {/* begin::Action */}
      <div className="text-center">
        {/* begin::Google link */}
        <a
          href={Redirect_URL}
          className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
        >
          <img
            alt="Logo"
            src={toAbsoluteUrl("/media/svg/brand-logos/google-icon.svg")}
            className="h-20px me-3"
          />
          Continue with Google
        </a>
        {/* end::Google link */}
      </div>
      {/* end::Action */}
    </form>
  );
}
