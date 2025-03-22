import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      {/* Add more navigation links */}
    </nav>
  );
};

export default Navbar;
