"use client";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import styles from "./login.module.css";
import Link from "next/link";
import Header from "@/layouts/HeaderMUI/Header";
import checkUsers from "@/services/checkLogin";
import { useRouter } from "next/navigation";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const { push } = useRouter();

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
            checkUsers(values.email, values.password)
              .then((data) => {
                console.log("data", data);
                localStorage.setItem("tocken", data[0].tocken);
                push('/');
              })
              .catch((err) => console.log(err));
          }}
        >
          {({ errors, touched }) => (
            <Form className={`${styles.signForm}`}>
              <div className={`${styles.container}`}>
                <label htmlFor="email">
                  <b>Email Address</b>
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
};

export default Login;
