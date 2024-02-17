import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Box, TextField, Button, Container, Typography } from '@mui/material';
import './Contact.css';

const ContactUsForm = () => {
  const initialValues = {
    name: '',
    surname: '',
    email: '',
    text: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    text: Yup.string().required('Text is required'),
  });

  const onSubmit = async (values) => {
    const templateParams = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      text: values.text,
    };

    try {
      await emailjs.send('service_gt9btmg', 'template_0pi8v0g', templateParams, 'fn-edCused1RYyEXf');
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Email sending failed:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const backgroundStyle = {
    backgroundImage: 'url("/image/phone.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Box component="div" style={backgroundStyle}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            margin="normal"
          />
          <TextField
            fullWidth
            id="surname"
            name="surname"
            label="Surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
            margin="normal"
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            id="text"
            name="text"
            label="Message"
            multiline
            rows={4}
            value={formik.values.text}
            onChange={formik.handleChange}
            error={formik.touched.text && Boolean(formik.errors.text)}
            helperText={formik.touched.text && formik.errors.text}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ContactUsForm;
