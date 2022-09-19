import styleUtils from "./SignupForm.module.css";
import TextInput from "../Toolkit/TextInput";

const SignupForm = () => {
  return (
    <div className={styleUtils.signup}>
      <div className={styleUtils["trial-message"]}>
        <p>
          <span className={styleUtils.bolder}>Try it free 7 days</span>
          <span> then $20/mo. thereafter</span>
        </p>
      </div>
      <form className={styleUtils.form}>
        <TextInput placeholder="First Name" type="text" />
        <TextInput placeholder="Last Name" type="text" />
        <TextInput placeholder="Email Address" type="text" />
        <TextInput placeholder="Password" type="password" />
        <button
          className={styleUtils["submit-btn"]}
          aria-label="click to sign up for 7 days tial"
        >
          Claim your free trial
        </button>
        <p className={styleUtils["terms-message"]}>
          By clicking the button, you are agreeing to our
          <span className={styleUtils.bolder}> Terms and Services</span>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
