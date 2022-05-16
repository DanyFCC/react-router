import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import PersonajesComponent from "./PersonajesComponent";

function SteveJobsComponent() {
  return (
    <>
      <h1>Steve Jobs</h1>
      <p>
        Steve Jobs was born in 1955 and raised by adoptive parents in Cupertino,
        California. Though he was interested in engineering, his passions as a
        youth varied. After dropping out of Reed College, Jobs worked as a video
        game designer at Atari and later went to India to experience Buddhism.
        In 1976 he helped launch Apple.
      </p>
      <Link to="/personajes">
        <button>Back to personajes de programacion</button>
      </Link>
    </>
  );
}

export default SteveJobsComponent;
