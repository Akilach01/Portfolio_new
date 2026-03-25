import "./styles/home.css";

function Home() {
  return (
    <section id="home">
      <div className="home-text">
        <h1>👋 Hello it's me</h1>
        <h2>Akila <span>Chamara</span>!</h2>

        <p>
          A passionate software developer and problem-solver.
          <br />
          "I turn ideas into reality with code". Keep scrolling to see my work.
        </p>

        <div className="social-media-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png" alt="LinkedIn" />
          </a>

          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png" alt="GitHub" />
          </a>
        </div>

        <div id="download">
          <a href="#">
            <button>Download CV</button>
          </a>
        </div>
      </div>

      <div>
        <img
          className="profilepic"
          src="../assets/images/my photo blue & red .jpg"
          alt="profile"
        />
      </div>
    </section>
  );
}

export default Home;
