import React from 'react'
import styles from "../login/login.module.css"
import Header from '../components/HomePage/header/Header'

const signUp = () => {
  return (
    <div>
      <Header />
      <form action="" className={`${styles.signForm}`}>
        <div className={`${styles.container}`}>

              <p>Please fill in this form to create an account.</p>
              <hr className={`${styles.horizontalLine}`} />

              <label htmlFor="email"><b>Email</b></label>
              <input className={`${styles.txtInput}`} type="text" placeholder="Enter Email" name="email" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input className={`${styles.pswInput}`} type="password" placeholder="Enter Password" name="psw" required />

              <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
              <input className={`${styles.pswInput}`} type="password" placeholder="Repeat Password" name="psw-repeat" required />
              
              <label>
                <input type="checkbox" /* checked="checked"*/ name="remember" /*style="margin-bottom:15px" *//> Remember me
              </label>
              
              <p>By creating an account you agree to our <a href="#" /*style="color:dodgerblue"*/>Terms & Privacy</a>.</p>

              <div className={`${styles.clearfix}`}>
                <button type="button" className={`${styles.cancelbtn} ${styles.halfWidth}`}>Cancel</button>
                <button type="submit" className={`${styles.btn} ${styles.halfWidth}`} /*onClick={signUp()}*/>Sign Up</button>
              </div>
            </div>
            <button type="button" className={`${styles.cancelbtn} ${styles.btn}`}> <a href="login">sign in</a> </button>

          </form>

    </div>
  )
}

export default signUp