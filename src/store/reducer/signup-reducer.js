// Every field has its own validity and error message
// so I use a default object to reduce amount of codes
const defaultValidity = {
  hasError: false,
  errorMessage: "",
};

const initialState = {
  formIsValid: null,
  firstNameValidity: defaultValidity,
  lastNameValidity: defaultValidity,
  emailValidity: defaultValidity,
  passwordValidity: defaultValidity,
};

function reducer(state, action) {
  // Get trimed fields values if exists
  const firstNameValue =
      action.payload.firstNameValue && action.payload.firstNameValue.trim(),
    lastNameValue =
      action.payload.lastNameValue && action.payload.lastNameValue.trim(),
    emailValue = action.payload.emailValue && action.payload.emailValue.trim(),
    passwordValue =
      action.payload.passwordValue && action.payload.passwordValue.trim();

  // Check First name validity
  if (!firstNameValue) {
    state = {
      ...state,
      firstNameValidity: {
        hasError: true,
        errorMessage: "First name cannot be empty",
      },
    };
  } else {
    state = {
      ...state,
      firstNameValidity: defaultValidity,
    };
  }

  // Check Last name validity
  if (!lastNameValue) {
    state = {
      ...state,
      lastNameValidity: {
        hasError: true,
        errorMessage: "Last name cannot be empty",
      },
    };
  } else {
    state = {
      ...state,
      lastNameValidity: defaultValidity,
    };
  }

  // Check email validity
  if (!emailValue) {
    state = {
      ...state,
      emailValidity: {
        hasError: true,
        errorMessage: "Email cannot be empty",
      },
    };
  } else {
    state = {
      ...state,
      emailValidity: defaultValidity,
    };
  }

  // email has value but a invalid value
  if (emailValue && !validateEmail(emailValue)) {
    state = {
      ...state,
      emailValidity: {
        hasError: true,
        errorMessage: "Looks like this is not an email",
      },
    };
  }

  // Check email validity
  if (!passwordValue) {
    state = {
      ...state,
      passwordValidity: {
        hasError: true,
        errorMessage: "Password cannot be empty",
      },
    };
  } else {
    state = {
      ...state,
      passwordValidity: defaultValidity,
    };
  }

  // Only if all required fields are valid then set the formIsValid to true
  if (
    state.firstNameValidity.hasError ||
    state.lastNameValidity.hasError ||
    state.emailValidity.hasError ||
    state.passwordValidity.hasError
  ) {
    state = {
      ...state,
      formIsValid: false,
    };
  } else {
    state = {
      ...state,
      formIsValid: true,
    };
  }

  return state;
}

// validate email address by regular expression
// https://stackoverflow.com/a/9204568/3925013
const validateEmail = (emailValue) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailValue);
};

export { initialState };
export default reducer;
