import { useState } from "react";
import Card from "../card/card";

export default function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextInput = (e) => {
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
          <button type="submit">Send feedback</button>
        </div>
      </form>
    </Card>
  );
}
