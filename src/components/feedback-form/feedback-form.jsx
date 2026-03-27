import { useState } from "react";
import Card from "../card/card";
import Button from "../button/button";

export default function FeedbackForm() {
  const [text, setText] = useState("");
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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* Todo: rating select component */}
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
