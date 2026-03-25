import "./styles/about.css";

function About() {
  return (
    <section id="about">
      <div className="education">
        <h1>About</h1>

        <p>
          Hello! I’m Akila Chamara from Sri Lanka. I am a software developer
          specializing in web and mobile applications.
        </p>

        <h2>Educational background</h2>

        <ol>
          <li>Completed O/L</li>
          <li>Completed A/L (Engineering Technology)</li>
        </ol>
      </div>

      <div className="skillset">
        <h4>Skills</h4>

        <img src="https://img.icons8.com/?size=100&id=13679&format=png" />
        <img src="https://img.icons8.com/?size=100&id=20909&format=png" />
        <img src="https://img.icons8.com/?size=100&id=gYCTehfTlYk5&format=png" />
      </div>
    </section>
  );
}

export default About;
