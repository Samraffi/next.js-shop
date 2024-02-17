import React from "react"
import styles from "./sign-up.module.css"

const signUp = () => {
  return (
    <div>
      <form action="" className={`${styles.signForm}`}>
        <div className={`${styles.container}`}>
          <p>Please fill in this form to create an account.</p>
          <hr className={`${styles.horizontalLine}`} />

          <label htmlFor="email"><b>Email</b></label>
          <input id="email" className={`${styles.txtInput}`} type="text" placeholder="Enter Email" name="email" required />

          <label htmlFor="fname"><b>First name</b></label>
          <input id="fname" className={`${styles.txtInput}`} type="text" placeholder="first name" name="fname" required />
          
          <label htmlFor="lname"><b>Last Name</b></label>
          <input id="lname" className={`${styles.txtInput}`} type="text" placeholder="first name" name="lname" required />

          <label htmlFor="phone"><b>phone number</b></label>
          <input id="phone" className={`${styles.txtInput}`} type="text" placeholder="first name" name="phone" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input className={`${styles.pswInput}`} type="password" placeholder="Enter Password" name="psw" required />

          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input className={`${styles.pswInput}`} type="password" placeholder="Repeat Password" name="psw-repeat" required />
          
          <label>
            <input type="checkbox" /* checked="checked"*/ name="remember" /*style="margin-bottom:15px" *//> Remember me
          </label>
          
          <p>By creating an account you agree to our <button /*style="color:dodgerblue"*/>Terms & Privacy</button>.</p>

          <div className={`${styles.clearfix}`}>
            <button type="button" className={`${styles["cancel-btn"]} ${styles.halfWidth}`}>Cancel</button>
            <button type="submit" className={`${styles.btn} ${styles.halfWidth}`} /*onClick={signUp()}*/>Sign Up</button>
          </div>
        </div>
        <button type="button" className={`${styles.change} ${styles.btn}`}> <a className={`${styles.sgn}`} href="login">sign in</a> </button>
      </form>
    </div>
  )
}

export default signUp