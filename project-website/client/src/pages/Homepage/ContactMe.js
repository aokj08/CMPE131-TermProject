import styles from "./ContactMe.module.css";
import { useState, useContext, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { loading, imgBack } from "../../assets";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../../store/auth-context";

const ContactMe = () => {
  const [typeEffect] = useTypewriter({
    words: ["If you have any questions", "Contact Us", "City of Williamston"],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 40,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const ctx = useContext(AuthContext);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (ctx.isLogIn) {
      setName(ctx.currentUser.displayName);
      setEmail(ctx.currentUser.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [ctx.isLogIn]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      // For local develop
      // const res = await axios.post("http://localhost:5000/contact", data);

      // For production mode
      const res = await axios.post(
        "https://server-testing-f2mo.onrender.com/contact",
        data
      );
      console.log(res);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${styles["main-container"]}`}>
      <div className={styles["central-form"]}>
        <div className={styles["col"]}>
          <h2 className={styles["title"]}>
            {typeEffect}
            <Cursor />{" "}
          </h2>
        </div>
        <div className={styles["back-form"]}>
          <div className={styles["img-back"]}>
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className={styles["send-btn"]}>
              <button type="submit">
                send <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className={styles["load"]}>
                    <img src={loading} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
