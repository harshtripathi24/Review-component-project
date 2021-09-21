import React from "react";
import Review from "./Review";
function App() {
  return (
    <main>
      <nav className="nav-bar">
        <h2>Review Component Project</h2>
      </nav>
      <section className="container">
        <div className="title">
          <h2>Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
