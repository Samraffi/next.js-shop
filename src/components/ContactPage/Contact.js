"use client";

import "./Contact.css";
import React from 'react';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useFormik } from 'formik';

const ContactPage = () => {
  const initialValues = {
    name: '',
    surname: '',
    email: '',
    text: '',
  }};


  
  const validationSchema = Yup.object({
    name: Yup.string().required('Please, enter the name'),
    surname: Yup.string().required('Please, enter the surname'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    text: Yup.string().required('Please enter text'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return ()

export default ContactPage;
