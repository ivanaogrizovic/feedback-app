import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header/header";
import FeedbackList from "./components/feedback-list/feedback-list";
import FeedbackStats from "./components/feeback-stats/feedback-stats";
import FeedbackForm from "./components/feedback-form/feedback-form";
import feedbackData from "./data/feedbackData";
import "./index.css";

export default function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
