import spinnerGif from "../assets/spinner.gif";
import "./spinner.css";

export default function Spinner() {
  return <img className="spinner" src={spinnerGif} alt="Loading..." />;
}
