import React, { useState } from "react";

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      question: "How to input vitals?",
      answer: "Go to the 'Vitals' section and enter your current health measurements.",
    },
    {
      question: "How to check your health score?",
      answer: "Your health score is visible on the Dashboard under 'Vitals Overview'.",
    },
    {
      question: "How to change password?",
      answer: "Go to 'Settings' and click on 'Change Password'.",
    },
    {
      question: "What is the disease prediction feature?",
      answer: "Based on your vitals, we suggest possible health risks. It's a support tool, not a diagnosis.",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowChat(!showChat)}
        className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-md"
      >
        {showChat ? "Close Chat" : "Need Help?"}
      </button>

      {showChat && (
        <div className="mt-2 w-72 bg-neutral-900 border border-purple-700 rounded-lg shadow-lg p-4 text-sm text-white">
          <p className="mb-2 font-bold">Ask a question:</p>
          {questions.map((q, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => setSelectedQuestion(q)}
                className="text-left w-full bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded"
              >
                {q.question}
              </button>
            </div>
          ))}
          {selectedQuestion && (
            <div className="mt-3 bg-purple-800/30 p-2 rounded text-purple-100">
              <strong>Answer:</strong> <p>{selectedQuestion.answer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
