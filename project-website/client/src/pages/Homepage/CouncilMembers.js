import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./CouncilMembers.module.css";
import {
  Brandon,
  Daniel,
  John,
  Scott,
  Steve,
  Tammy,
  Terry,
  Tommy,
} from "../../assets";

const CouncilMemebrs = () => {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1201: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <section className={styles["testimonial-section"]}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className={styles["testi-item"]}>
                  <div className={styles["client-info"]}>
                    <div className={styles["client-img"]}>
                      <img src={Tammy} alt="no internet connection"></img>
                    </div>
                    <div>
                      <h5>Tammy Gilroy</h5>
                      <p>
                        <b>Mayor</b>
                      </p>
                      <p>Term Expiration: 11/30/2024</p>
                      <p>tgilroy@williamston-mi.us</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={styles["testi-item"]}>
                  <div className={styles["client-info"]}>
                    <div className={styles["client-img"]}>
                      <img src={Brandon} alt="no internet connection"></img>
                    </div>
                    <div>
                      <h5>Brandon Lanyon</h5>
                      <p>
                        <b>Mayor Pro-Tem</b>
                      </p>
                      <p>Term Expiration: 11/30/2024</p>
                      <p>blanyon@williamston-mi.us</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={styles["testi-item"]}>
                  <div className={styles["client-info"]}>
                    <div className={styles["client-img"]}>
                      <img src={John} alt="no internet connection"></img>
                    </div>
                    <div>
                      <h5>John Hanifan</h5>
                      <p>
                        <b>City Manager</b>
                      </p>
                      <p>517-655-2774, ext. 110</p>
                      <p>manager@williamston-mi.us</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={styles["testi-item"]}>
                  <div className={styles["client-info"]}>
                    <div className={styles["client-img"]}>
                      <img src={Terry} alt="no internet connection"></img>
                    </div>
                    <div>
                      <h5>Terry Hansen</h5>
                      <p>
                        <b> </b>
                      </p>
                      <p>Term Expiration: 11/30/2026</p>
                      <p>thansen@williamston-mi.us</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={styles["testi-item"]}>
                  <div className={styles["client-info"]}>
                    <div className={styles["client-img"]}>
                      <img src={Steve} alt="no internet connection"></img>
                    </div>
                    <div>
                      <h5>Steve Jenkins</h5>
                      <p>
                        <b> </b>
                      </p>
                      <p>Term Expiration: 11/20/2026</p>
                      <p>sjenkins@williamston-mi.us</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={styles["testi-item"]}>
                  <div className={styles["client-info"]}>
                    <div className={styles["client-img"]}>
                      <img src={Tommy} alt="no internet connection"></img>
                    </div>
                    <div>
                      <h5>Tommy Pratt</h5>
                      <p>
                        <b> </b>
                      </p>
                      <p>Term Expiration: 11/30/2024</p>
                      <p>tpratt@williamston-mi.us</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={styles["testi-item"]}>
                  <div className={styles["client-info"]}>
                    <div className={styles["client-img"]}>
                      <img src={Daniel} alt="no internet connection"></img>
                    </div>
                    <div>
                      <h5>Daniel Rhines</h5>
                      <p>
                        <b> </b>
                      </p>
                      <p>Term Expiration: 11/30/2024</p>
                      <p>drhines@williamston-mi.us</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={styles["testi-item"]}>
                  <div className={styles["client-info"]}>
                    <div className={styles["client-img"]}>
                      <img src={Scott} alt="no internet connection"></img>
                    </div>
                    <div>
                      <h5>Scott VanAllsburg</h5>
                      <p>
                        <b> </b>
                      </p>
                      <p>Term Expiration: 11/30/2026</p>
                      <p>svanallsburg@williamston-mi.us</p>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CouncilMemebrs;
