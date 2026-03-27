import { useState } from "react";
import Card from "../card/card";
import Button from "../button/button";
import RatingSelect from "../rating-select/rating-select";
import "./feedback-form.css";

export default function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextInput = (e) => {
    if (text === "") {
      setButtonDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setButtonDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect setRating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextInput}
          />
          <Button type="submit" isDisabled={buttonDisabled}>
            Send feedback
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
