import { BrowserRouter as Router, Link } from "react-router-dom";
function BillGateComponent() {
  return (
    <>
      <h1>Bill Gates</h1>
      <p>
        Bill Gates is a technologist, business leader, and philanthropist. He
        grew up in Seattle, Washington, with an amazing and supportive family
        who encouraged his interest in computers at an early age. He dropped out
        of college to start Microsoft with his childhood friend Paul Allen.
      </p>
      <Link to="/personajes">
        <button>Back to personajes de programacion</button>
      </Link>
    </>
  );
}

export default BillGateComponent;
