import React, { useRef } from 'react';

const HomePage = () => {
  const emailInput = useRef();
  const feedbackInput = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedbackInput.current.value;
    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>HomePage</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            id="feedback"
            cols="30"
            rows="10"
            ref={feedbackInput}
          ></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
};

export default HomePage;
