import { ReactComponent as ErrorIcon } from "../../images/icon-error.svg";

const TextInput = ({ placeholder, type }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} />
      <ErrorIcon focusable="false" aria-hidden="true" />
    </div>
  );
};

export default TextInput;
