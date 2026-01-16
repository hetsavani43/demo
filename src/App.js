import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';

const init={
  fname:'',
  email:'',
  pass:'',
  cpass:'',
  city:'',
  gender:''
}

const validate=Yup.object({
    fname:Yup.string().min(2).max(30).required('Plz fill out this field..!'),
    email:Yup.string().email().required('Plz fill out this field..!'),
    pass:Yup.string().min(8).required('Plz fill out this field..!'),
    cpass:Yup.string().oneOf([Yup.ref('pass')],'Enter correct password').required('Plz fill out this field..!'),
    city:Yup.string().required('Plz select your city..!'),
    gender:Yup.string().required('Plz select gender..!'),
})


function App() {

  const [frmdata,setdata]=useState([])

  const {values, errors, handleChange, handleBlur, handleSubmit, touched}=useFormik({
      initialValues:init,
      validationSchema:validate,
      onSubmit:(values)=>{
          // console.log(values);
          setdata(values);
      }
  })

  // console.log(values);
  

  return (
    <div className="App">
      <h1 className='bg-primary text-white p-3 text-center'>Formik Form Validation</h1>
      <div className="container mt-5">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="inputEmail3" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="inputEmail3" name="fname" value={values.fname}  onChange={handleChange} onBlur={handleBlur} />
            {
              ((errors.fname && touched.fname) ? <font color='red'>{errors.fname}</font> : null)
            }
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" name='email' value={values.email}  onChange={handleChange} onBlur={handleBlur} />
            {
              ((errors.email && touched.email) ? <font color='red'>{errors.email}</font> : null)
            }
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" name='pass' value={values.pass}  onChange={handleChange} onBlur={handleBlur} />
            {
              ((errors.pass && touched.pass) ? <font color='red'>{errors.pass}</font> : null)
            }
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword5" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="inputPassword5" name='cpass' value={values.cpass}  onChange={handleChange} onBlur={handleBlur} />
            {
              ((errors.cpass && touched.cpass) ? <font color='red'>{errors.cpass}</font> : null)
            }
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">City</label>
            <select id="inputState" className="form-select" name='city' value={values.city}  onChange={handleChange} onBlur={handleBlur}>
              <option selected>Choose...</option>
              <option>Surat</option>
              <option>Navsari</option>
              <option>Valsad</option>
              <option>Vapi</option>
              <option>Baroda</option>
            </select>
            {
              ((errors.city && touched.city) ? <font color='red'>{errors.city}</font> : null)
            }
          </div>
          <div className="col-6">
            <div>
              <label htmlFor="inputState" className="form-label">Gender</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="radioDefault1" value='Male'  onChange={handleChange} onBlur={handleBlur} />
                <label className="form-check-label" htmlFor="radioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="radioDefault2" value='Female'  onChange={handleChange} onBlur={handleBlur} />
                <label className="form-check-label" htmlFor="radioDefault2">
                  Female
                </label>
              </div>
              {
                ((errors.gender && touched.gender) ? <font color='red'>{errors.gender}</font> : null)
              }
            </div>

          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
