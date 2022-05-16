import { BrowserRouter as Router, Link } from "react-router-dom";

function PersonajesComponent() {
  return (
    <>
      <h1>Personajes de la Programacion</h1>
      <p>
        Aqui aprenderas sobre estos 5 personajes del mundo de la programacion
      </p>

      <li className="list">
        <Link to="/jobs">
          <ul>Steve Jobs</ul>
        </Link>
        <Link to="/gates">
          <ul>Bill Gates</ul>
        </Link>
        <Link to="/bezos">
          <ul>Jeff Bezos</ul>
        </Link>
        <Link to="/zuckerberg">
          <ul>Mark Zuckerberg</ul>
        </Link>
        <Link to="/musk">
          <ul>Elon Musk</ul>
        </Link>
      </li>
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </>
  );
}

export default PersonajesComponent;
