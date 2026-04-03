import { useContext } from "react";
import FeedbackContext from "../../context/feedbackContext";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "../feedback-item/feedback-item";
import Spinner from "../spinner/spinner";

export default function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  console.log(feedback);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
