"use client";

import Header from "../components/HomePage/header/Header";
import styles from "./login.module.css"


export default function Login() {
  return (
    <div>
      <Header />
        <form className={`${styles.signForm}`} action="" method="">
          <div className={`${styles.container}`}>
            <label htmlFor="uname"><b>Username</b></label><br />
            <input className={`${styles.txtInput}`} type="text" placeholder="Enter Username" name="uname" required /><br />

            <label htmlFor="psw"><b>Password</b></label> <br />
            <input className={`${styles.pswInput}`} type="password" placeholder="Enter Password" name="psw" required />
                
            <button className={`${styles.btn}`} type="submit" onClick={() => checkLogin()}>Login</button>
            {/* <label htmlFor='remember'>
              <input id='remember' type="checkbox" checked="checked" name="remember" /> Remember me
            </label>  */}
          </div>
          <button type="button" className={`${styles.cancelbtn} ${styles.btn}`}> <a href="sign-up">sign up</a> </button>

          {/* <div className={`${styles.container}`} /*style="background-color:#f1f1f1">
            <button type="button" className={`${styles.cancelbtn} ${styles.btn}`}>Cancel</button>
            <span className={`${styles.psw}`}>Forgot <a href="#">password?</a></span>
          </div> */}
        </form>
    </div>
  );
}
