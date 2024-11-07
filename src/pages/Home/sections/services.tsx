import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faPencilAlt,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <section id="my-services" className="ts-block ts-xs-text-center pb-0">
      <div className="container">
        <div className="ts-title text-center">
          <h2>My Services</h2>
        </div>
        {/* end ts-title*/}
        <div className="row">
          <div className="col-sm-6 col-md-4 col-xl-4">
            <div className="ts-item" data-animate="ts-fadeInUp">
              <div className="ts-item-content">
                <div className="ts-item-header">
                  <figure className="icon">
                    <img src="/images/new/my-service-1.webp" alt="" />
                  </figure>
                  {/* end icon*/}
                </div>
                {/* end ts-item-header*/}
                <div className="ts-item-body">
                  <h4>Web Development</h4>
                  <p className="mb-0">
                    Building dynamic, efficient websites with a focus on user
                    experience and functionality.
                  </p>
                </div>
                {/* end ts-item-body*/}
                <div className="ts-item-footer">
                  {/*  <a
                        href="#"
                        data-toggle="modal"
                        data-target="#modal"
                        className="ts-link-arrow-effect"
                      >
                        <span>Read More</span>
                      </a> */}
                </div>
                {/* end ts-item-footer*/}
              </div>
              {/* end ts-item-content*/}
            </div>
            {/* end ts-item*/}
          </div>
          {/* end col-xl-4*/}
          <div className="col-sm-6 col-md-4 col-xl-4">
            <div
              className="ts-item"
              data-animate="ts-fadeInUp"
              data-delay=".1s"
            >
              <div className="ts-item-content">
                <div className="ts-item-header">
                  <figure className="icon IconBig pt-2">
                    <FontAwesomeIcon icon={faCogs} />
                  </figure>
                  {/*  <figure className="icon">
                        <img src="/images/new/my-service-2.png" alt="" />
                      </figure> */}
                  {/* end icon*/}
                </div>
                {/* end ts-item-header*/}
                <div className="ts-item-body">
                  <h4>CMS Development</h4>
                  <p className="mb-0">
                    Creating and customizing content management systems for easy
                    website management and scalability.
                  </p>
                </div>
                {/* end ts-item-body*/}
                <div className="ts-item-footer">
                  {/*  <a
                        href="#"
                        data-toggle="modal"
                        data-target="#modal"
                        className="ts-link-arrow-effect"
                      >
                        <span>Read More</span>
                      </a> */}
                </div>
                {/* end ts-item-footer*/}
              </div>
              {/* end ts-item-content*/}
            </div>
            {/* end ts-item*/}
          </div>
          {/* end col-xl-4*/}
          <div className="col-sm-6 col-md-4 col-xl-4">
            <div
              className="ts-item"
              data-animate="ts-fadeInUp"
              data-delay=".2s"
            >
              <div className="ts-item-content">
                <div className="ts-item-header">
                  <figure className="icon IconBig pt-2">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </figure>
                  {/*  <figure className="icon">
                        <img src="/images/new/my-service-3.png" alt="" />
                      </figure> */}
                  {/* end icon*/}
                </div>
                {/* end ts-item-header*/}
                <div className="ts-item-body">
                  <h4>Responsive Design</h4>
                  <p className="mb-0">
                    Optimizing websites for search engines to improve visibility
                    and organic traffic.
                  </p>
                </div>
                {/* end ts-item-body*/}
                <div className="ts-item-footer">
                  {/*  <a
                        href="#"
                        data-toggle="modal"
                        data-target="#modal"
                        className="ts-link-arrow-effect"
                      >
                        <span>Read More</span>
                      </a> */}
                </div>
                {/* end ts-item-footer*/}
              </div>
              {/* end ts-item-content*/}
            </div>
            {/* end ts-item*/}
          </div>
          {/* end col-xl-4*/}
          <div className="col-sm-6 col-md-4 col-xl-4">
            <div
              className="ts-item"
              data-animate="ts-fadeInUp"
              data-delay=".3s"
            >
              <div className="ts-item-content">
                <div className="ts-item-header">
                  {/*  <figure className="icon">
                        <img src="/images/new/my-service-4.png" alt="" />
                      </figure> */}
                  <figure className="icon IconBig">
                    <FontAwesomeIcon icon={faSearchengin} />
                  </figure>
                  {/* end icon*/}
                </div>
                {/* end ts-item-header*/}
                <div className="ts-item-body">
                  <h4>SEO</h4>
                  <p className="mb-0">
                    Designing adaptable interfaces that work seamlessly across
                    devices, ensuring optimal user experiences.
                  </p>
                </div>
                {/* end ts-item-body*/}
                <div className="ts-item-footer">
                  {/*  <a
                        href="#"
                        data-toggle="modal"
                        data-target="#modal"
                        className="ts-link-arrow-effect"
                      >
                        <span>Read More</span>
                      </a> */}
                </div>
                {/* end ts-item-footer*/}
              </div>
              {/* end ts-item-content*/}
            </div>
            {/* end ts-item*/}
          </div>
          {/* end col-xl-4*/}
          <div className="col-sm-6 col-md-4 col-xl-4">
            <div
              className="ts-item"
              data-animate="ts-fadeInUp"
              data-delay=".4s"
            >
              <div className="ts-item-content">
                <div className="ts-item-header">
                  <figure className="icon IconBig">
                    <FontAwesomeIcon icon={faDatabase} />
                  </figure>
                  {/*  <figure className="icon">
                        <img src="/images/new/my-service-5.png" alt="" />
                      </figure> */}
                  {/* end icon*/}
                </div>
                {/* end ts-item-header*/}
                <div className="ts-item-body">
                  <h4>API Development</h4>
                  <p className="mb-0">
                    Developing robust, scalable APIs to enable smooth data
                    exchange between different platforms.
                  </p>
                </div>
                {/* end ts-item-body*/}
                <div className="ts-item-footer">
                  {/*  <a
                        href="#"
                        data-toggle="modal"
                        data-target="#modal"
                        className="ts-link-arrow-effect"
                      >
                        <span>Read More</span>
                      </a> */}
                </div>
                {/* end ts-item-footer*/}
              </div>
              {/* end ts-item-content*/}
            </div>
            {/* end ts-item*/}
          </div>
          {/* end col-xl-4*/}
          <div className="col-sm-6 col-md-4 col-xl-4">
            <div
              className="ts-item"
              data-animate="ts-fadeInUp"
              data-delay=".5s"
            >
              <div className="ts-item-content">
                <div className="ts-item-header">
                  <figure className="icon">
                    <img src="/images/new/my-service-6.webp" alt="" />
                  </figure>
                  {/* end icon*/}
                </div>
                {/* end ts-item-header*/}
                <div className="ts-item-body">
                  <h4>Performance Optimization</h4>
                  <p className="mb-0">
                    Enhancing website speed and efficiency to ensure fast load
                    times and superior user performance.
                  </p>
                </div>
                {/* end ts-item-body*/}
                <div className="ts-item-footer">
                  {/*  <a
                        href="#"
                        data-toggle="modal"
                        data-target="#modal"
                        className="ts-link-arrow-effect"
                      >
                        <span>Read More</span>
                      </a> */}
                </div>
                {/* end ts-item-footer*/}
              </div>
              {/* end ts-item-content*/}
            </div>
            {/* end ts-item*/}
          </div>
          {/* end col-xl-4*/}
        </div>
        {/* end row*/}
      </div>
      {/* end container*/}
    </section>
  );
};

export default Services;
