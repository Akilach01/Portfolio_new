function Work() {
  return (
    <section id="work">
      <h1>Work</h1>

      <div className="projects">
        <div className="card-1">
          <h2>Tic Tac Toe Game</h2>
          <div className="card-body">
            <img src="/assets/images/tic tac toe img.jfif" />
            <p>
              I developed a classic Tic Tac Toe game using Java with AI.
            </p>
          </div>
        </div>

        <div className="card-2">
          <h2>JourneyHub Railway Management System</h2>
          <div className="card-body">
            <img src="/assets/images/screenshot jh railway login.jpg" />
            <p>Advanced railway management platform.</p>
          </div>
        </div>

        <div className="card-3">
          <h2>Personal Website</h2>
          <div className="card-body">
            <img src="/assets/images/Screenshot portfolio home.jpg" />
            <p>Portfolio showcasing my web development skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
