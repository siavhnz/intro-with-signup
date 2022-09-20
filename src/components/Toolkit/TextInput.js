import React from "react";
import styleUtils from "./TextInput.module.css";
import { ReactComponent as ErrorIcon } from "../../images/icon-error.svg";

const TextInput = React.forwardRef((props, ref) => {
  const { placeholder, type, validity } = { ...props };
  const { hasError, errorMessage } = { ...validity };

  // Handle error state
  let error = "";
  let inputClasses = styleUtils.input;

  if (hasError) {
    // Give input a border red on error state
    inputClasses = `${styleUtils.input} ${styleUtils.error}`;

    // show icon and a message on error state
    error = (
      <>
        <ErrorIcon
          className={styleUtils["error-icon"]}
          focusable="false"
          aria-hidden="true"
        />
        <span className={styleUtils["error-message"]}>{errorMessage}</span>
      </>
    );
  }

  return (
    <div className={styleUtils.container}>
      <input
        ref={ref}
        className={inputClasses}
        type={type}
        placeholder={placeholder}
      />
      {error}
    </div>
  );
});

export default TextInput;
