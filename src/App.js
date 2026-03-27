import { useState } from "react";
import Header from "./components/header/header";
import FeedbackList from "./components/feedback-list/feedback-list";
import FeedbackStats from "./components/feeback-stats/feedbac-stats";
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
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
