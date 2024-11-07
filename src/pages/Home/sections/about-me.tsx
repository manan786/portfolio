import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
  return (
    <section id="about-me" className="ts-block pb-4">
      <div className="container">
        <div className="ts-title text-center">
          <h2>About Me</h2>
        </div>
        {/*end ts-title*/}
        <div className="row ts-align__vertical">
          <div className="col-md-6">
            <img
              src="/images/new/about-me2.webp"
              alt=""
              className="mw-100 mb-5"
            />
          </div>
          <div className="col-md-6">
            <h4 className="ts-bubble-border">Hi There</h4>
            <p>
              I am Abdullah, a full stack developer specializing in the MERN
              stack. I create dynamic, responsive web applications with a focus
              on performance and scalability.
            </p>
            <dl className="ts-column-count-2">
              <dt>Name:</dt>
              <dd>Abdullah</dd>
              <dt>Phone:</dt>
              <dd>+92 344 4379220</dd>
              <dt>Email:</dt>
              <dd>super.mind6@gmail.com</dd>
              <dt>Github:</dt>
              <dd>github.com/Abdullah-zia</dd>
            </dl>
            <hr className="ts-hr-light mb-5" />
            <a href="#contact" className="ts-btn-effect mr-2">
              <span className="ts-visible btn btn-primary">
                Contact Me
                <FontAwesomeIcon className="small ml-2 mb-1" icon={faArrowRight} />
              </span>
              <span
                className="ts-hidden btn btn-primary"
                data-bg-color="#d44729"
              >
                Contact Me
                <FontAwesomeIcon className="small mb-1" icon={faArrowRight} />
              </span>
            </a>
            {/*<a href="#contact" className="btn btn-primary ts-btn-arrow mr-2">Contact Me</a>*/}
            {/*<a href="#contact" className="btn btn-outline-light ts-btn-border-light">*/}
            {/*<i className="fa fa-download small mr-2"></i>*/}
            {/*Download CV*/}
            {/*</a>*/}
            <a href="/images/Abdullahzia.pdf" className="ts-btn-effect mr-2">
              <span className="ts-visible btn btn-outline-light">
                <FontAwesomeIcon className="small mr-2" icon={faDownload} />
                Download CV
              </span>
              <span className="ts-hidden btn btn-light bg-white">
                <FontAwesomeIcon className="small mr-2" icon={faDownload} />
                Download CV
              </span>
            </a>
          </div>
        </div>
        {/*end row*/}
      </div>
    </section>
  );
};

export default AboutMe;
