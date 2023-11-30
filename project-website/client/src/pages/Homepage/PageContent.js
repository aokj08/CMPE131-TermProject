import Footer from "../../components/Layout/Footer";
import styles from "./PageContent.module.css";
import { city_hall_sign } from "../../assets";
import ContactMe from "./ContactMe";
import Slideshow from "../../components/UI/Slideshow";

const PageContent = () => {
  let screenWidth = window.innerWidth;
  console.log(screenWidth);

  let introCode;
  if (screenWidth <= 1399) {
    introCode = (
      <div className="row">
        <h2
          className={`${styles["tm-text-primary"]} mb-4 ${styles["tm-section-title"]} text-left`}
        >
          Introduction
        </h2>
        <p
          className={`mb-4 text-left ${styles["tm-intro-text"]} ${styles["tm-intro-para"]}`}
        >
          Our goal is to provide information about our community for residents
          and visitors to learn about who we are and what we can provide. This
          will be an ongoing project with updates and additions as we go along,
          so check back often!
        </p>
        <Slideshow />
        {/* <div className="col-lg-12">
          <img
            src={city_hall_sign}
            alt="Image"
            className={`img-fluid ${styles["tm-intro-img"]}`}
          />
        </div> */}
        <div className="col-lg-12">
          <div className={styles["tm-intro-text-container"]}>
            <p
              className={`mb-4 text-center ${styles["tm-intro-text"]} ${styles["tm-intro-para"]}`}
            ></p>
            <p className={`mb-5 text-center ${styles["tm-intro-text"]}`}>
              <h4>WILLIAMSTON CITY HALL</h4>
              <h5>161 E Grand River Ave, Williamston, MI 48895</h5>
              <h5>
                517-655-2774; Fax-517-655-2797; <a>info@williamston-mi.us</a>
              </h5>
              <h5>Office hours, 8am-5pm, Monday-Friday</h5>{" "}
              <h5>
                A locked drop box is available near the front entrance of City
                Hall for your convenience.
              </h5>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    introCode = (
      <div className="row">
        <div className="col-lg-6">
          <img
            src={city_hall_sign}
            alt="Image"
            className={`img-fluid ${styles["tm-intro-img"]}`}
          />
        </div>
        <div className="col-lg-6">
          <div className={styles["tm-intro-text-container"]}>
            <h2
              className={`${styles["tm-text-primary"]} mb-4 ${styles["tm-section-title"]} text-center`}
            >
              Introduction
            </h2>
            <p
              className={`mb-4 text-center ${styles["tm-intro-text"]} ${styles["tm-intro-para"]}`}
            >
              Our goal is to provide information about our community for
              residents and visitors to learn about who we are and what we can
              provide. This will be an ongoing project with updates and
              additions as we go along, so check back often!
            </p>
            <p className={`mb-5 text-center ${styles["tm-intro-text"]}`}>
              <h4>WILLIAMSTON CITY HALL</h4>
              <h5>161 E Grand River Ave, Williamston, MI 48895</h5>
              <h5>
                517-655-2774; Fax-517-655-2797; <a>info@williamston-mi.us</a>
              </h5>
              <h5>Office hours, 8am-5pm, Monday-Friday</h5>{" "}
              <h5>
                A locked drop box is available near the front entrance of City
                Hall for your convenience.
              </h5>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["page-content"]}>
      <section id="introduction" className={styles["tm-section-pad-top"]}>
        <div className="container">
          {introCode}
          <div
            className={`row ${styles["tm-section-pad-top"]} ${styles["tm-section-pad-top-content"]}`}
          >
            <div className="col-lg-4 mt-5 mt-lg-0">
              <i
                className={`fas fa-4x fa-tint text-center ${styles["tm-icon"]}`}
              ></i>
              <h4 className={`text-center ${styles["tm-text-primary"]} mb-4`}>
                WATER SEWER INFORMATION
              </h4>
              <p>
                If you have a water or sewer emergency during regular business
                hours (M-F from 8a-5p), please call City Hall at 517-655-2774.
              </p>
              <p>
                If you have a water or sewer emergency <b>AFTER HOURS</b>,
                please call 517-992-5022 and the Department of Public Works will
                be paged.
              </p>
            </div>

            <div className="col-lg-4 mt-5 mt-lg-0">
              <i
                className={`fas fa-4x fa-car text-center ${styles["tm-icon"]}`}
              ></i>
              <h4 className={`text-center ${styles["tm-text-primary"]} mb-4`}>
                PARKING ON CITY STREETS
              </h4>
              <p>
                There is{" "}
                <b>
                  NO PARKING on any City street from October 1 – March 31
                  between 2am-5am.
                </b>{" "}
                This ordinance is in effect even if there is no snow on the
                ground, per City Ordinance - Sec. 66-145. If there is a late
                snowfall (in April) cars will need to be off the streets. This
                is to allow our DPW workers the ability to remove snow from
                streets.
              </p>
            </div>

            <div className="col-lg-4 mt-5 mt-lg-0">
              <i
                className={`fas fa-4x fa-leaf text-center ${styles["tm-icon"]}`}
              ></i>
              <h4 className={`text-center ${styles["tm-text-primary"]} mb-4`}>
                LEAF PICKUP
              </h4>
              <p className="text-center">
                <b>BEGINS MONDAY, OCTOBER 16, 2023</b>
              </p>
              <p>
                Do not bag your leaves. Leaves must be in the street at the
                curb. If you live on Grand River Avenue, do not put them in the
                street, only rake to the curb. All other areas, if the leaves
                are not in the street, they will not be picked up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className={`${styles["tm-section-pad-top"]} ${styles["tm-section-pad-top-content"]}`}
      >
        <div className={`container ${styles["tm-container-gallery"]}`}>
          <div className="row">
            <div className="text-center col-12">
              <h2
                className={`${styles["tm-text-primary"]} ${styles["tm-section-title"]} mb-4`}
              >
                Our Work
              </h2>
              <p className={`mx-auto ${styles["tm-work-description"]}`}>
                "Curabitur ac orci ac lorem blandit volutpat. Sed ac sodales
                nibh, ut porttitor elit. Sed id dui mi. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia."
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={`mx-auto ${styles["tm-gallery-container"]}`}>
                <div className={`${styles["grid"]} ${styles["tm-gallery"]}`}>
                  <a href="img/gallery-img-01.jpg">
                    <figure
                      className={`${styles["effect-honey"]} ${styles["tm-gallery-item"]}`}
                    >
                      <img
                        src="img/gallery-tn-01.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i>
                            Dreamy <span>Honey</span> Now
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="img/gallery-img-02.jpg">
                    <figure
                      className={`${styles["effect-honey"]} ${styles["tm-gallery-item"]}`}
                    >
                      <img
                        src="img/gallery-tn-02.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i>
                            Second <span>Honey</span> Now
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="img/gallery-img-03.jpg">
                    <figure
                      className={`${styles["effect-honey"]} ${styles["tm-gallery-item"]}`}
                    >
                      <img
                        src="img/gallery-tn-03.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i>
                            Third <span>Honey</span> Now
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="img/gallery-img-04.jpg">
                    <figure
                      className={`${styles["effect-honey"]} ${styles["tm-gallery-item"]}`}
                    >
                      <img
                        src="img/gallery-tn-04.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i>
                            Dreamy <span>Honey</span> Now
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="img/gallery-img-05.jpg">
                    <figure
                      className={`${styles["effect-honey"]} ${styles["tm-gallery-item"]}`}
                    >
                      <img
                        src="img/gallery-tn-05.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i>
                            Fifth <span>Honey</span> Now
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="img/gallery-img-06.jpg">
                    <figure
                      className={`${styles["effect-honey"]} ${styles["tm-gallery-item"]}`}
                    >
                      <img
                        src="img/gallery-tn-06.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i>
                            Sixth <span>Honey</span> Now
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="img/gallery-img-01.jpg">
                    <figure
                      className={`${styles["effect-honey"]} ${styles["tm-gallery-item"]}`}
                    >
                      <img
                        src="img/gallery-tn-01.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i>
                            Dreamy <span>Honey</span> Now
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                  <a href="img/gallery-img-02.jpg">
                    <figure
                      className={`${styles["effect-honey"]} ${styles["tm-gallery-item"]}`}
                    >
                      <img
                        src="img/gallery-tn-02.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i>
                            Eighth <span>Honey</span> Now
                          </i>
                        </h2>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactMe />
      <Footer />
    </div>
  );
};

export default PageContent;
