import TextInput from "../Toolkit/TextInput";

const SignupForm = () => {
  return (
    <div>
      <div>
        <p>
          <span>Try it free 7 days</span>
          <span>then $20/mo. thereafter</span>
        </p>
      </div>
      <form>
        <TextInput placeholder="First Name" type="text" />
        <TextInput placeholder="Last Name" type="text" />
        <TextInput placeholder="Email Address" type="text" />
        <TextInput placeholder="Password" type="password" />
        <button aria-label="click to sign up for 7 days tial">
          Claim your free trial
        </button>
        <p>
          By clicking the button, you are agreeing to our Terms and Services
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
