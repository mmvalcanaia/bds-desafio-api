import 'bootstrap/js/src/collapse.js';
import './styles.css';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-primary navbar">
      <Link to="/">
        <h4>Github API</h4>
      </Link>
    </nav>
  );
}

export default Navbar;
