import styles from "./Home.module.css";
import Slideshow from "./../../components/UI/Slideshow";
import PageContent from "./PageContent";
import Header from "../../components/Layout/Header";
import { useEffect, useState } from "react";
import AuthenModal from "../../components/AuthenModal/AuthenModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  let screenWidth = window.innerWidth;
  console.log(screenWidth);

  let introCode = false;
  if (screenWidth <= 1399) {
    introCode = false;
  } else {
    introCode = true;
  }

  useEffect(() => {
    let selector = document.querySelector(`.${styles["scroll-container"]}`);
    selector.addEventListener("scroll", () => {
      console.log(selector.scrollTop);
      if (selector.scrollTop >= 900) setIsTransparent(true);
      else setIsTransparent(false);
    });
  }, []);

  return (
    <div className={styles["scroll-container"]}>
      <ToastContainer />
      <Header
        className={isTransparent || !introCode ? "navbar-bg" : "hover-navbar"}
      />
      {introCode && <Slideshow />}
      <PageContent />
    </div>
  );
};

export default Home;
