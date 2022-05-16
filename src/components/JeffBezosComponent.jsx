import { BrowserRouter as Router, Link } from "react-router-dom";

function JeffBezosComponent() {
  return (
    <>
      <h1>Jeff Bezos</h1>
      <p>
        Jeff Bezos was not born into a wealthy family. His parents were 17 and
        18 years old when he was born, and he worked on his maternal
        grandparents' ranch in Cotulla, Texas, early in his life. He graduated
        summa cum laude from Princeton University in 1986, with degrees in
        electrical engineering and computer science.
      </p>
      <Link to="/personajes">
        <button>Back to personajes de programacion</button>
      </Link>
    </>
  );
}

export default JeffBezosComponent;
