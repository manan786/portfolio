import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <section id="testimonials" className="ts-block text-center pb-5 d-none">
      <div className="container">
        <div className="ts-title">
          <h2>Testimonials</h2>
        </div>
        {/*end ts-title*/}
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div
              className="owl-carousel"
              data-owl-dots="1"
              data-owl-loop="1"
              data-animate="ts-fadeInUp"
            >
              <div className="slide mb-5">
                <figure className="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                  <FontAwesomeIcon icon={faQuoteRight} />
                </figure>
                <p className="ts-h5">
                  In id nulla magna. Nullam posuere fermentum mattis. Nunc id
                  dui at sapien faucibus fermentum ut vel diam. Nullam tempus,
                  nunc id efficitur sagittis
                </p>
                <div
                  className="ts-circle__lg mb-3"
                  data-bg-image="/images/new/person-01.jpg"
                ></div>
                <h5>Jane Doe</h5>
                <h6 className="ts-opacity__40">Bristol Creative</h6>
              </div>
              {/*end slide*/}
              <div className="slide mb-5">
                <figure className="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                  <FontAwesomeIcon icon={faQuoteRight} />
                </figure>
                <p className="ts-h5">
                  Nam egestas porta posuere. Nunc velit lorem, vestibulum vitae
                  massa nec, lacinia dictum ligula. Quisque scelerisque nec
                  dolor id convallis. Vestibulum porta ipsum pretium turpis
                  rhoncus, non fringilla ipsum mattis.
                </p>
                <div
                  className="ts-circle__lg mb-3"
                  data-bg-image="/images/new/person-02.jpg"
                ></div>
                <h5>John Brown</h5>
                <h6 className="ts-opacity__40">ABC Architects</h6>
              </div>
              {/*end slide*/}
            </div>
            {/*end owl-carousel*/}
          </div>
          {/*end col-md-8*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
    </section>
  );
};

export default Testimonial;
