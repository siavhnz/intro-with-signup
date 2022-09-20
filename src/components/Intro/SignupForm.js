import styleUtils from "./SignupForm.module.css";
import TextInput from "../Toolkit/TextInput";
import { useReducer, useRef } from "react";
import reducer, { initialState } from "../../store/reducer/signup-reducer";

const SignupForm = () => {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  /**
   *  This component has mutiple related state so
   *  I use useReducer for better handling states
   */

  const [state, dispatch] = useReducer(reducer, initialState);

  // Check fields validity using dispatch
  const submitHandler = (event) => {
    event.preventDefault();

    // Get fields values and pass to reducer for check validity
    const firstNameValue = firstNameInput.current.value,
      lastNameValue = lastNameInput.current.value,
      emailValue = emailInput.current.value,
      passwordValue = passwordInput.current.value;

    dispatch({
      payload: {
        firstNameValue,
        lastNameValue,
        emailValue,
        passwordValue,
      },
    });
  };

  return (
    <div className={styleUtils.signup}>
      <div className={styleUtils["trial-message"]}>
        <p>
          <span className={styleUtils.bolder}>Try it free 7 days</span>
          <span> then $20/mo. thereafter</span>
        </p>
      </div>
      <form onSubmit={submitHandler} className={styleUtils.form}>
        <TextInput
          ref={firstNameInput}
          validity={state.firstNameValidity}
          placeholder="First Name"
          type="text"
        />
        <TextInput
          ref={lastNameInput}
          validity={state.lastNameValidity}
          placeholder="Last Name"
          type="text"
        />
        <TextInput
          ref={emailInput}
          validity={state.emailValidity}
          placeholder="Email Address"
          type="text"
        />
        <TextInput
          ref={passwordInput}
          validity={state.passwordValidity}
          placeholder="Password"
          type="password"
        />

        <button
          type="submit"
          className={styleUtils["submit-btn"]}
          aria-label="click to sign up for 7 days tial"
        >
          Claim your free trial
        </button>

        {state.formIsValid && (
          <p className={styleUtils["success-message"]}>
            Your 7 days free trial began
          </p>
        )}

        <p className={styleUtils["terms-message"]}>
          By clicking the button, you are agreeing to our
          {/* 
            it must be anchar tag or an intractive tag for navigation
            but for simplicity of this challenge I used span
          */}
          <span className={styleUtils.bolder}> Terms and Services</span>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
