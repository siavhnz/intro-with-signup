import SignupForm from "./SignupForm";

const Introductory = () => {
  return (
    <article>
      <div>
        <h1>Learn to code by watching others</h1>
        <p>
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
