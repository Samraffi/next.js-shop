"use client";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import styles from "./login.module.css";
import Link from "next/link";
import Header from "@/layouts/HeaderMUI/Header";
import checkUsers from "@/services/checkLogin";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // console.log(values);
            checkUsers(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={`${styles.signForm}`}>
              <div className={`${styles.container}`}>
                <label htmlFor="email">
                  <b>Username</b>
                </label>
                <br />
                <Field
                  className={`${styles.txtInput}`}
                  type="text"
                  name="email"
                />
                <div className={`${styles.error}`}>
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <br />
                <label htmlFor="password">
                  <b>Password</b>
                </label>{" "}
                <br />
                <Field
                  className={`${styles.pswInput}`}
                  type="password"
                  name="password"
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <motion.button
                  className={`${styles.btn}`}
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                >
                  Login
                </motion.button>
              </div>
              <motion.button
                type="button"
                className={`${styles.change} ${styles.btn}`}
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/sign-up" className={`${styles.sgn}`}>
                  Sign Up
                </Link>
              </motion.button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </>
  );
}
