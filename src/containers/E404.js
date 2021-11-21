import { Link } from "react-router-dom";

import Snap from "../assets/img/snap.jpg";

const E404 = () => {
  return (
    <main className="E404">
      <div className="container">
        <div className="E404-content">
          <h1>404 Page not found</h1>
          <div className="e404-text">
            Oh Snap! Seems like our servers got dusted in the snap!
            <br /> Our avengers are working on getting our universe back to
            normal...
          </div>
          <div className="e404-picture">
            <img src={Snap} alt="Snap" />
          </div>
          <button>
            <Link to="/">Go back in time</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default E404;
