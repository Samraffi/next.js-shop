"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import styles from "./sign-up.module.css";
import Link from "next/link";
import Header from "@/layouts/HeaderMUI/Header";
import { AuthContext } from "@/context/useAuthContext";
import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";
import createUser from "@/services/createUser";
import { useRouter } from "next/navigation";

const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(
      /^(\+\d{1,3}[- ]?)?\d{9}$/,
      "Phone number must be 9 digits and may start with a country code"
    )
    .required("Required"),
  psw: Yup.string().required("Required"),
  "psw-repeat": Yup.string()
    .oneOf([Yup.ref("psw"), null], "Passwords must match")
    .required("Required"),
});

const SignUp = () => {
  const { push } = useRouter();
  const { userSignUp } = useAuthUserAndSignOut();
  const formik = useFormik({
    initialValues: {
      email: "",
      fname: "",
      lname: "",
      phone: "",
      psw: "",
      "psw-repeat": "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      userSignUp(values)
        .then((userCredential) => {
          createUser(userCredential?.user?.uid, values)
            .then((data) => {
              push('/');
            })
            .catch((err) => console.log("createUser err", err));
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <AuthContext.Provider value={{ userSignUp }}>
      <Header />
      <motion.form
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        onSubmit={formik.handleSubmit}
        className={`${styles.signForm}`}
      >
        <div className={`${styles.container}`}>
          <p>Please fill in this form to create an account.</p>
          <hr className={`${styles.horizontalLine}`} />

          <label htmlFor="fname">
            <b>First Name</b>
          </label>
          <input
            id="fname"
            className={`${styles.txtInput}`}
            type="text"
            placeholder="First Name"
            name="fname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fname}
            required
          />
          {formik.touched.fname && formik.errors.fname && (
            <div className={`${styles.error}`}>{formik.errors.fname}</div>
          )}

          <label htmlFor="lname">
            <b>Last Name</b>
          </label>
          <input
            id="lname"
            className={`${styles.txtInput}`}
            type="text"
            placeholder="Last Name"
            name="lname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lname}
            required
          />
          {formik.touched.lname && formik.errors.lname && (
            <div className={`${styles.error}`}>{formik.errors.lname}</div>
          )}
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            id="email"
            className={`${styles.txtInput}`}
            type="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className={`${styles.error}`}>{formik.errors.email}</div>
          )}

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>
          <input
            id="phone"
            className={`${styles.txtInput}`}
            type="text"
            placeholder="Phone Number"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            required
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className={`${styles.error}`}>{formik.errors.phone}</div>
          )}

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            id="psw"
            className={`${styles.txtInput}`}
            type="password"
            placeholder="Password"
            name="psw"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.psw}
            required
          />
          {formik.touched.psw && formik.errors.psw && (
            <div className={`${styles.error}`}>{formik.errors.psw}</div>
          )}

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            id="psw-repeat"
            className={`${styles.txtInput}`}
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values["psw-repeat"]}
            required
          />
          {formik.touched["psw-repeat"] && formik.errors["psw-repeat"] && (
            <div className={`${styles.error}`}>
              {formik.errors["psw-repeat"]}
            </div>
          )}
        </div>
        <div className={`${styles.buttonContainer}`}>
          <button type="submit" className={`${styles.btn} ${styles.halfWidth}`}>
            Sign Up
          </button>
          <Link href="/login" className={`${styles.btn} ${styles.halfWidth}`}>
            Login
          </Link>
        </div>
      </motion.form>
    </AuthContext.Provider>
  );
};

export default SignUp;
