import Modal from "../UI/Modal";
import styles from "./AuthenModal.module.css";
import { useContext, useState } from "react";

import GoogleButton from "react-google-button";
import AuthContext from "../../store/auth-context";

const AuthenModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const ctx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    ctx.signUp(email, password);

    setEmail("");
    setPassword("");
  };

  const signinHandler = (method) => {
    if (method === "Google") ctx.logIn("Google", "Google", "Google");
  };

  let modalSelection = !isSignup ? (
    <Modal>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit">Sign up</button>
        <p>Already have an account?</p>
      </form>
    </Modal>
  ) : (
    <Modal>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit">Sign In</button>
        <h2>Or</h2>
        <GoogleButton
          onClick={() => {
            ctx.logIn("Google", "Google", "Google");
          }}
        />
        <p>Already have an account?</p>
      </form>
    </Modal>
  );

  return (
    //     {!isVerified ? <Modal>
    //       <h1>Focus App</h1>
    //       <form onSubmit={submitHandler}>
    //         <div>
    //           <label htmlFor="email-address">Email address</label>
    //           <input
    //             type="email"
    //             label="Email address"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //             placeholder="Email address"
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor="password">Password</label>
    //           <input
    //             type="password"
    //             label="Create password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //             placeholder="Password"
    //           />
    //         </div>
    //         <button type="submit">Sign up</button>
    //         <p>Already have an account?</p>
    //       </form>
    //     </Modal>
    //    : <Modal></Modal>}
    // )};
    modalSelection
  );
};
export default AuthenModal;
