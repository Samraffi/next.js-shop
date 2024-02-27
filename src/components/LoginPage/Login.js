"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import Header from "@/layouts/Header/Header";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import { useAuthUserAndSignOut } from "@/hooks/useAuthUserAndSignOut";

import styles from "./Login.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const { push } = useRouter();
  const { userSignIn } = useAuthUserAndSignOut();

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
            userSignIn(values)
              .then((credential) => push('/'))
              .catch((err) => console.log(err.message));
          }}
        >
          {({ errors, touched }) => (
            <Form className={`${styles.signForm}`}>
              <div className={`${styles.container}`}>
                <EmailField />
                <PasswordField />
                <motion.button
                  className={`${styles.btn}`}
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                >
                  Login
                </motion.button>
                <motion.button
                  type="button"
                  className={`${styles.change} ${styles.btn}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link href="/sign-up" className={`${styles.sgn}`}>
                    Sign Up
                  </Link>
                </motion.button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </>
  );
}

export default Login;
