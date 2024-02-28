"use client";

import { useState } from "react";
import { Field } from "formik";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import styles from "./Login.module.css";

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <>
      <label htmlFor="password">
        <b>Password</b>
      </label>
      <Field name="password">
        {({ field, form, meta }) => (
          <>
            <FormControl sx={{ width: "90%", alignItems: "center" }}>
              <OutlinedInput
                sx={{ bgcolor: "white" }}
                className={`${styles.input}`}
                {...field}
                type={showPassword ? 'text' : 'password'}
                label={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
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

export default PasswordField;
