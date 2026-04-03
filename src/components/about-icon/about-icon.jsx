import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

export default function AboutIcon() {
  return (
    <div className="about-link">
      <Link to="/about" aria-label="About this app">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}
