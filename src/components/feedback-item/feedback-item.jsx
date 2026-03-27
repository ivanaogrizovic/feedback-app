import { FaTimes } from "react-icons/fa";
import Card from "../card/card";
import "./feedback-item.css";

export default function FeedbackItem({ item, handleDelete }) {
  return (
    <Card darkTheme={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
