import { createContext, useState } from "react";

const FeeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState({
    id: 1,
    text: "this item is from context",
    rating: 10,
  });
  return (
    <FeeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {children}
    </FeeedbackContext.Provider>
  );
};

export default FeeedbackContext;
