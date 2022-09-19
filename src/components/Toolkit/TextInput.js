import styleUtils from "./TextInput.module.css";
import { ReactComponent as ErrorIcon } from "../../images/icon-error.svg";

const TextInput = ({ placeholder, type }) => {
  return (
    <div className={styleUtils.container}>
      <input
        className={styleUtils.input}
        type={type}
        placeholder={placeholder}
      />
      <ErrorIcon
        className={styleUtils["error-icon"]}
        focusable="false"
        aria-hidden="true"
      />
      <span className={styleUtils["error-message"]}>
        this field cannot be empty
      </span>
    </div>
  );
};

export default TextInput;
