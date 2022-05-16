import { BrowserRouter as Router, Link } from "react-router-dom";

function MuskComponent() {
  return (
    <>
      <h1>Elon Musk</h1>
      <p>
        Elon Musk, (born June 28, 1971, Pretoria, South Africa), South
        African-born American entrepreneur who cofounded the electronic-payment
        firm PayPal and formed SpaceX, maker of launch vehicles and spacecraft
      </p>
      <Link to="/personajes">
        <button>Back to personajes de programacion</button>
      </Link>
    </>
  );
}

export default MuskComponent;
