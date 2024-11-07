import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLongArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id="ts-footer" className="mt-5">
      <section
        id="contact"
        className="ts-block ts-separate-bg-element"
        data-bg-image="assets/img/bg-man-wall.jpg"
        data-bg-image-opacity=".1"
      >
        <div className="container">
          <div className="ts-title text-center">
            <h2 className="ts-bubble-border">Get In Touch</h2>
          </div>
          <div className="row ts-xs-text-center">
            <div
              className="col-sm-6 col-md-3 text-center mb-4"
              data-animate="ts-fadeInUp"
            >
              <img src="/images/new/location.webp" className="mb-4" alt="" />
              <h5>Address</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">
                  142, Block E Ghulam Muhammad Abad, Faisalabad Pakistan
                </figure>
              </div>
              {/*end ts-opacity__50*/}
            </div>
            {/*end col-md-3*/}
            <div
              className="col-sm-6 col-md-3 text-center mb-4"
              data-animate="ts-fadeInUp"
              data-delay=".1s"
            >
              <img src="/images/new/phone.webp" className="mb-4" alt="" />
              <h5>Phone</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">+92 344 4379220</figure>
                <figure className="mb-0">+92 303 7988050</figure>
                {/* <figure>+1 781-254-8437</figure> */}
              </div>
              {/*end ts-opacity__50*/}
            </div>
            {/*end col-md-3*/}
            <div
              className="col-sm-6 col-md-3 text-center mb-4"
              data-animate="ts-fadeInUp"
              data-delay=".2s"
            >
              <img src="/images/new/email.webp" className="mb-4" alt="" />
              <h5>Email</h5>
              <div className="ts-opacity__50">
                <figure className="mb-0">super.mind6@gmail.com</figure>
              </div>
              {/*end ts-opacity__50*/}
            </div>
            {/*end col-md-3*/}
            <div
              className="col-sm-6 col-md-3 text-center mb-4"
              data-animate="ts-fadeInUp"
              data-delay=".3s"
            >
              <img src="/images/new/feedback.webp" className="mb-4" alt="" />
              <h5>Whatsapp</h5>
              <div className="ts-opacity__50">
                <figure>+923444379220</figure>
              </div>
              {/*end ts-opacity__50*/}
            </div>
            {/*end col-md-3*/}
          </div>
          {/*end row*/}

          <div className="pt-5 d-none">
            <div className="row">
              <div className="col-md-4">
                <h3>Let’s Connect</h3>
                <div className="ts-column-count-sm-2">
                  <a
                    href="#"
                    className="mb-3 d-flex text-white ts-align__vertical"
                  >
                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                    <span>Facebook</span>
                  </a>
                  {/*end link*/}
                  <a
                    href="#"
                    className="mb-3 d-flex text-white ts-align__vertical"
                  >
                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                    <span>Twitter</span>
                  </a>
                  {/*end link*/}
                  <a
                    href="#"
                    className="mb-3 d-flex text-white ts-align__vertical"
                  >
                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                    <span>Instagram</span>
                  </a>
                  {/*end link*/}
                  <a
                    href="#"
                    className="mb-3 d-flex text-white ts-align__vertical"
                  >
                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                      <FontAwesomeIcon icon={faPinterestP} />
                    </span>
                    <span>Pinterest</span>
                  </a>
                  {/*end link*/}
                  <a
                    href="#"
                    className="mb-3 d-flex text-white ts-align__vertical"
                  >
                    <span className="ts-circle__xs border border-white ts-border-light mr-4">
                      <i className="fab fa-skype"></i>
                      <FontAwesomeIcon icon={faSkype} />
                    </span>

                    <span>Skype</span>
                  </a>
                  {/*end link*/}
                </div>
              </div>
              {/*end col-md-4*/}
              <div className="col-md-8">
                <h3>Send Me a Message</h3>
                <form
                  id="form-contact"
                  method="post"
                  className="clearfix ts-form ts-form-email"
                  data-php-path="assets/php/email.php"
                >
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form-contact-name">Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="form-contact-name"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      {/*end form-group */}
                    </div>
                    {/*end col-md-6 col-sm-6 */}
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="form-contact-email">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="form-contact-email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      {/*end form-group */}
                    </div>
                    {/*end col-md-6 col-sm-6 */}
                  </div>
                  {/*end row */}
                  <div className="form-group">
                    <label htmlFor="form-contact-subject">Subject *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="form-contact-subject"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  {/*end form-group */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="form-contact-message">Message *</label>
                        <textarea
                          className="form-control"
                          id="form-contact-message"
                          rows={5}
                          name="message"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                      {/*end form-group */}
                    </div>
                    {/*end col-md-12 */}
                  </div>
                  {/*end row */}
                  <div className="form-group clearfix">
                    <button
                      type="submit"
                      className="btn btn-primary float-right ts-btn-arrow"
                      id="form-contact-submit"
                    >
                      Send a Message
                    </button>
                  </div>
                  {/*end form-group */}
                  <div className="form-contact-status"></div>
                </form>
                {/*end form-contact */}
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end #contact*/}

      <div className="text-dark bg-white">
        <div className="container py-3 position-relative">
          <small>© 2024 Abdullah, All Rights Reserved</small>
          <a
            href="#page-top"
            className="ts-circle__xs rounded-0 bg-dark position-absolute ts-right__0 ts-top__0 ts-push-up__50 ts-scroll"
          >
            <FontAwesomeIcon icon={faLongArrowUp} className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
