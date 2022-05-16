import { BrowserRouter as Router, Link } from "react-router-dom";

function HomeComponent() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Welcome to my first react router/app where we will briefly look at 5
        great characters who have shaped the development world as we know it
        today.
      </p>
      <Link to="/personajes">
        <button>Personajes de la programacion</button>
      </Link>
    </>
  );
}

export default HomeComponent;
