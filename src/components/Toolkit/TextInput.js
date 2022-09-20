import React from "react";
import styleUtils from "./TextInput.module.css";
import { ReactComponent as ErrorIcon } from "../../images/icon-error.svg";

const TextInput = React.forwardRef((props, ref) => {
  const { placeholder, type, validity } = { ...props };
  const { hasError, errorMessage } = { ...validity };

  let error = "";
  if (hasError) {
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
        className={styleUtils.input}
        type={type}
        placeholder={placeholder}
      />
      {error}
    </div>
  );
});

export default TextInput;
