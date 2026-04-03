import { useContext } from "react";
import FeedbackContext from "../../context/feedbackContext";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "../card/card";
import "./feedback-item.css";

export default function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card darkTheme={true}>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => deleteFeedback(item.id)}
        className="close"
        aria-label="Close"
      >
        <FaTimes color="purple" size="24px" />
      </button>
      <button
        onClick={() => editFeedback(item)}
        className="edit"
        aria-label="Edit"
      >
        <FaEdit color="purple" size="24px" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
