import FeedbackForm from "../components/feedback-form/feedback-form";
import FeedbackStats from "../components/feeback-stats/feedback-stats";
import FeedbackList from "../components/feedback-list/feedback-list";

export default function Home() {
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </>
  );
}
