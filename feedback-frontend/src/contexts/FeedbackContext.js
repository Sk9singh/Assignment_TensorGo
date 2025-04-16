import React, { createContext, useState, useContext } from 'react';

const FeedbackContext = createContext();

export const useFeedback = () => {
  return useContext(FeedbackContext);
};

export const FeedbackProvider = ({ children }) => {
  const [feedbackUpdated, setFeedbackUpdated] = useState(false);

  return (
    <FeedbackContext.Provider value={{ feedbackUpdated, setFeedbackUpdated }}>
      {children}
    </FeedbackContext.Provider>
  );
};
