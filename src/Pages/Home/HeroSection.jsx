function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I am Shivang Patel</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Computer Science Student</span>{" "}
          </h1>
          <p className="hero--section-description">
            I am currently a 4th year CS student at the University of Georgia in Athens, Georgia.
            <br /> I am currently looking for an internship in web development, data science, or software engineering
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
    </section>
  );
}

export default HeroSection;
