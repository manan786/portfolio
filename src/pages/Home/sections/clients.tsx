const Clients = () => {
  return (
    <section
      className="ts-block"
      data-bg-image="/images/new/bg-man-sitting2.webp"
    >
      <div className="container ts-promo-numbers">
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="ts-promo-number text-center">
              <figure className="odometer" data-odometer-final="36">
                0
              </figure>
              <h5>Clients</h5>
            </div>
            {/*end ts-promo-number*/}
          </div>
          {/*end col-md-3*/}
          <div className="col-sm-6 col-md-3">
            <div className="ts-promo-number text-center">
              <figure className="odometer" data-odometer-final="61">
                0
              </figure>
              <h5>Projects</h5>
            </div>
            {/*end ts-promo-number*/}
          </div>
          {/*end col-md-3*/}
          <div className="col-sm-6 col-md-3">
            <div className="ts-promo-number text-center">
              <figure className="odometer" data-odometer-final="31">
                0
              </figure>
              <h5>Happy Client</h5>
            </div>
            {/*end ts-promo-number*/}
          </div>
          {/*end col-md-3*/}
          <div className="col-sm-6 col-md-3">
            <div className="ts-promo-number text-center">
              <figure className="odometer" data-odometer-final="4">
                0
              </figure>
              <h5>Years Experience</h5>
            </div>
            {/*end ts-promo-number*/}
          </div>
          {/*end col-md-3*/}
        </div>
      </div>
    </section>
  );
};

export default Clients;
