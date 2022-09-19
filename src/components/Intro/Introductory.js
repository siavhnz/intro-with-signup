import styleUtils from "./Introductory.module.css";
import SignupForm from "./SignupForm";

const Introductory = () => {
  return (
    <article className={styleUtils.container}>
      <div className={styleUtils.intro}>
        <h1 className={styleUtils.title}>Learn to code by watching others</h1>
        <p className={styleUtils.desc}>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <SignupForm />
      </div>
    </article>
  );
};

export default Introductory;
