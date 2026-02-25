function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Personal Web Monitor</h1>

        <p className="home-subtitle">
          Automatically track changes on important web pages and get
          AI-powered summaries of what changed.
        </p>

        <div className="home-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-text">
              Add URLs you care about.
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-text">
              Click <strong>Check Now</strong> to fetch updates.
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-text">
              View diffs and AI-generated summaries instantly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;