import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackForm from "../components/feedback-form/feedback-form";
import FeedbackStats from "../components/feeback-stats/feedback-stats";
import FeedbackList from "../components/feedback-list/feedback-list";
import AboutIcon from "../components/about-icon/about-icon";
import feedbackData from "../data/feedbackData";

export default function Home() {
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
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
}
