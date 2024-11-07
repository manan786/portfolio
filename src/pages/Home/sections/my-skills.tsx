const MySkills = () => {
  return (
    <section id="my-skills" className="ts-block pb-5">
      <div className="container">
        <div className="ts-title text-center">
          <h2>My Skills</h2>
        </div>
        {/*end ts-title*/}
        <h4>Every Day is a New Challenge</h4>
        <div className="row">
          <div className="col-md-6">
            <p>
              I specialize in crafting high-performing web applications that
              prioritize efficiency and scalability. With a deep understanding
              of both front-end and back-end development, I ensure that every
              project I work on is optimized for speed, user experience, and
              maintainability. My approach to development emphasizes clean,
              modular code that enhances collaboration and makes future updates
              seamless.
            </p>
            <p>
              In addition to focusing on performance, I am committed to building
              applications that can scale effortlessly as user demands grow.
              Whether it's optimizing databases, fine-tuning server-side logic,
              or ensuring responsive front-end interfaces, I aim to create
              solutions that are not only reliable in the present but also
              flexible enough to handle future expansions.
            </p>
            <a href="#contact" className="btn btn-outline-light mb-5">
              Contact Me
            </a>
          </div>
          {/*end col-md-6*/}
          <div className="col-md-6">
            <div className="progress" data-progress-width="80%">
              <h5 className="ts-progress-title">JavaScript ES6</h5>
              <figure className="ts-progress-value"></figure>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={90}
              ></div>
            </div>
            {/*end progress*/}
            <div className="progress" data-progress-width="80%">
              <h5 className="ts-progress-title">React JS</h5>
              <figure className="ts-progress-value"></figure>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            {/*end progress*/}
            <div className="progress" data-progress-width="90%">
              <h5 className="ts-progress-title">HTML, CSS</h5>
              <figure className="ts-progress-value"></figure>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            {/*end progress*/}
            <div className="progress" data-progress-width="85%">
              <h5 className="ts-progress-title">Bootstrap, Tailwind</h5>
              <figure className="ts-progress-value"></figure>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>

            <div className="progress" data-progress-width="80%">
              <h5 className="ts-progress-title">Node JS</h5>
              <figure className="ts-progress-value"></figure>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <div className="progress" data-progress-width="70%">
              <h5 className="ts-progress-title">Git Version Control</h5>
              <figure className="ts-progress-value"></figure>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <div className="progress" data-progress-width="80%">
              <h5 className="ts-progress-title">MongoDB</h5>
              <figure className="ts-progress-value"></figure>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <div className="progress" data-progress-width="90%">
              <h5 className="ts-progress-title">And More</h5>
              <figure className="ts-progress-value"></figure>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            {/*end progress*/}
          </div>
          {/*end col-md-6*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
    </section>
  );
};

export default MySkills;
