import React from 'react';
import { useFormik } from 'formik';
import { registerSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import Link from 'next/link';
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react';

const RegisterForm = () => {
  const [file, setFile] = useState(null)
  let router= useRouter()
  // use formik
  const { handleChange, handleSubmit, handleBlur, setFieldValue, errors, values, touched } = useFormik({
    initialValues: { username: '', email: '', password: '', confirmPassword: '', display_name: '',display_avatar: ''},
    validationSchema: registerSchema,
    onSubmit: (values, { resetForm }) => {
      let data = new FormData()
      data.append('username', values.username)
      data.append('email', values.email)
      data.append('password', values.password)
      data.append('confirmPassword', values.confirmPassword)
      data.append('display_name',values.display_name)
      data.append('display_avatar', file)
      console.log(data)
      axios.post('http://127.0.0.1:8000/user/signup/',data=data ,{headers: {
        'Content-Type': 'multipart/form-data'
      }}).then((response) => {
        resetForm()
        router.push("/login")
      }).catch((error) => {
        console.log(error) //toast for failure
      })
    }
  })
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="tp-number">
        <label htmlFor="username">User Name</label>
        <input value={values.username} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your name" id="username" />
        {touched.username && <ErrorMsg error={errors.username} />}
      </div>
      <div className="tp-number">
        <label htmlFor="display_name">Display Name</label>
        <input value={values.display_name} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your display name" id="display_name" />
        {touched.display_name && <ErrorMsg error={errors.display_name} />}
      </div>
      <div className="tp-mail">
        <label htmlFor="email">Email</label>
        <input value={values.email} onChange={handleChange}
          onBlur={handleBlur} type="text" placeholder="Enter your Email" id="email" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="tp-password">
        <label htmlFor="password">Password</label>
        <input value={values.password} onChange={handleChange}
          onBlur={handleBlur} type="password" placeholder="Enter your password" id="password" />
        {touched.password && <ErrorMsg error={errors.password} />}
      </div>
      <div className="tp-password">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input value={values.confirmPassword} onChange={handleChange}
          onBlur={handleBlur} type="password" placeholder="Enter your confirm password" id="confirmPassword" />
        {touched.confirmPassword && <ErrorMsg error={errors.confirmPassword} />}
      </div>
      
      <div className="tp-number">
        <label htmlFor="display_avatar">Display Avatar</label>
        <input  onChange={(event) => { 
          setFile(event.target.files[0]); 
        }}
          onBlur={handleBlur} type="file" placeholder="Enter your name" id="display_avatar" accept="image/*"/>
        {/* {touched.file && <ErrorMsg error={errors.file} />} */}
      </div>
      <div className="tp-forgot-password d-flex justify-content-between">
        <div className="checkbox">
          <input type="checkbox" id="Remember" name="fav_language" value="Remember" />
          {' '}<label htmlFor="Remember">Remember me</label>
        </div>
      </div>
      <div className="tp-login-button">
        <button className="tp-btn-yellow w-100" type="submit" onClick={handleSubmit}>Sign up</button>
      </div>
      <div className="tp-signup d-flex justify-content-between">
        <div className="account">
          <a href="#">Don’t have an account?</a>
        </div>
        <div className="signin">
          <Link href="/login">
            <a>Sign in now</a>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;