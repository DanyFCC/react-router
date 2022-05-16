import { BrowserRouter as Router, Link } from "react-router-dom";

function ZuckerbergComponent() {
  return (
    <>
      <h1>Mark Zuckerberg</h1>
      <p>
        Mark Zuckerberg (born May 14, 1984) is a former Harvard computer science
        student who along with a few friends launched Facebook, the world's most
        popular social network, in February 2004. Zuckerberg also has the
        distinction of being the world's youngest billionaire, which he achieved
        in 2008 at the age of 24
      </p>
      <Link to="/personajes">
        <button>Back to personajes de programacion</button>
      </Link>
    </>
  );
}

export default ZuckerbergComponent;
