import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareGithub,
  faSquarePinterest,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLongArrowDown } from "@fortawesome/free-solid-svg-icons";

const MyHero = () => {
  return (
    <div id="ts-hero" className="ts-animate-hero-items">
      {/* HERO CONTENT */}
      <div className="container position-relative h-100 ts-align__vertical">
        <div className="row w-100">
          <div className="col-md-8">
            {/* SOCIAL ICONS */}
            <figure className="ts-social-icons mb-4">
              <a
                href="https://www.facebook.com/gold.prince.5811"
                target="_blank"
                className="mr-3"
              >
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
              <a
                href="https://github.com/Abdullah-zia"
                target="_blank"
                className="mr-3"
              >
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
              <a
                href="https://www.pinterest.com/supermind6/"
                target="_blank"
                className="mr-3"
              >
                <FontAwesomeIcon icon={faSquarePinterest} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-zia-184025192"
                target="_blank"
                className="mr-3"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/developer.abdullah_zia/"
                target="_blank"
                className="mr-3"
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
            </figure>

            {/* TITLE */}
            <h1>I am Abdullah</h1>
            <h1 className="ts-bubble-border">
              <span className="ts-title-rotate">
                <span className="active">Web Developer</span>
                <span>Front End Developer</span>
                <span>Creative Person</span>
              </span>
            </h1>
          </div>
          {/* end col-md-8 */}
        </div>
        {/* end row */}
        <a
          href="#my-services"
          className="ts-btn-effect position-absolute ts-bottom__0 ts-left__0 ts-scroll ml-3 mb-3"
        >
          <span className="ts-visible ts-circle__sm rounded-0 text-white ts-bg-primary">
            <FontAwesomeIcon icon={faLongArrowDown} />
          </span>
          <span className="ts-hidden ts-circle__sm rounded-0 ">
            <FontAwesomeIcon icon={faLongArrowDown} />
          </span>
        </a>
      </div>
      {/* END HERO CONTENT */}
      {/* HERO BACKGROUND */}
      <div className="ts-background">
        <div
          className="ts-background-image mt-5"
          data-bg-image="/images/new/bg.hero-4.webp"
        ></div>
      </div>
      {/* END HERO BACKGROUND */}
    </div>
  );
};

export default MyHero;
