import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import styles from "./Signin.module.css";
import Header from "../../components/Layout/Header";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Signin = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const ctx = useContext(AuthContext);

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginEmailInputHandler = (event) => {
    setLoginEmail(event.target.value);
  };

  const LoginPasswordInputHandler = (event) => {
    setLoginPassword(event.target.value);
  };

  const formSignInHandler = (e) => {
    e.preventDefault();
    ctx.logIn("Email", loginEmail, loginPassword);
    setLoginEmail("");
    setLoginPassword("");
  };

  const formRegisterHandler = (e) => {
    e.preventDefault();
    ctx.signUp(email, password, name);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Header />
      <div className={styles["flex-container"]}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
              >
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
              >
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <div className="text-center mb-3">
                <p>Sign in with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}
                >
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                    onClick={() => {
                      ctx.logIn("Facebook");
                    }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                    onClick={() => {
                      ctx.logIn("Google");
                    }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                    onClick={() => {
                      ctx.logIn("GitHub");
                    }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>

              <form onSubmit={formSignInHandler}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email Address"
                  // id="form1"
                  type="email"
                  value={loginEmail}
                  onChange={loginEmailInputHandler}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Login Password"
                  // id="form2"
                  type="password"
                  value={loginPassword}
                  onChange={LoginPasswordInputHandler}
                />

                {/* <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                  <a href="!#">Forgot password?</a>
                </div> */}

                <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              </form>

              <p className="text-center">
                Not a member?{" "}
                <a>
                  <button
                    className={styles["register-member"]}
                    onClick={() => handleJustifyClick("tab2")}
                  >
                    Register
                  </button>
                </a>
              </p>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === "tab2"}>
              <div className="text-center mb-3">
                <p>Sign up with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}
                >
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                    onClick={() => {
                      ctx.logIn("Facebook");
                    }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                    onClick={() => {
                      ctx.logIn("Google");
                    }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                    onClick={() => {
                      ctx.logIn("GitHub");
                    }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>

              <form onSubmit={formRegisterHandler}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  type="text"
                  value={name}
                  onChange={nameInputHandler}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  value={email}
                  onChange={emailInputHandler}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                  value={password}
                  onChange={passwordInputHandler}
                />
                <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
              </form>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </>
  );
};

export default Signin;
