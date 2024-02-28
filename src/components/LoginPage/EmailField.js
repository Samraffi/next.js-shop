"use client";

import { Field } from "formik";
import { FormControl, OutlinedInput } from "@mui/material";

import styles from "./Login.module.css";

const EmailField = () => {
  return (
    <>
      <label htmlFor="email">
        <b>Username</b>
      </label>
      <Field name="email" variant="outlined">
        {({ field, form, meta }) => (
          <>
            <FormControl sx={{ width: "90%", alignItems: "center" }}>
              <OutlinedInput
                id="outlined-adornment-email"
                sx={{ bgcolor: "white" }}
                className={`${styles.input}`}
                type='text'
                label='text'
                {...field}
              />
              <div className={`${styles.error}`}>
                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
              </div>
            </FormControl>
          </>
        )}
      </Field>
    </>
  );
}

export default EmailField;
