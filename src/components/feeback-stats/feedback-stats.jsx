import { useContext } from "react";
import FeedbackContext from "../../context/feedbackContext";
import "./feedback-stats.css";

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let avarage =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  avarage = avarage.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h2>{feedback.length} Reviews</h2>
      <h2>Avarage rating: {isNaN(avarage) ? 0 : avarage}</h2>
    </div>
  );
}
