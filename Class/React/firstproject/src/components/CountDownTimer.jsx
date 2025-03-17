import React, { useEffect, useState } from "react";
import "../index.css";
const CountDownTimer = () => {
  const [eventName, setEventName] = useState(""); //stores the name of the event for the timer
  const [eventDate, setEventDate] = useState(""); // stores the date of the event for the timer
  const [countdownStarted, setCountdownStarted] = useState(false); // checks if the countdown has started
  const [timeRemaining, setTimeRemaining] = useState(0); // stores the time remaining for the countdown

  const handleSetCountdown = () => {
    setCountdownStarted(true);
    localStorage.setItem("eventDate", eventDate);
    localStorage.setItem("eventName", eventName);
  };

  // const handleStartCountdown = () => {
  //   setCountdownStarted(true);
  //   alert("Countdown has started!");
  // };

  const handleStopCountdown = () => {
    setCountdownStarted(false);
    setTimeRemaining(0);
  };

  const handleResetCountdown = () => {
    setCountdownStarted(false);
    setEventName("");
    setEventDate("");
    setTimeRemaining(0);
    localStorage.removeItem("eventDate");
    localStorage.removeItem("eventName");
  };

  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className="countdown-display">
        <div className="countdown-value">
          {days.toString().padStart(2, "0")} <span>Days</span>
          {hours.toString().padStart(2, "0")} <span>Hours</span>
          {minutes.toString().padStart(2, "0")} <span>Minutes</span>
          {seconds.toString().padStart(2, "0")} <span>Seconds</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (countdownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert("Countdown has ended!");
        }
        setTimeRemaining(remainingTime);
      }, 1000);

      return () => {
        clearInterval(countdownInterval);
      };
    }
  }, [countdownStarted, eventDate, timeRemaining]);

  useEffect(() => {
    if (countdownStarted) {
      document.title = eventName;
    }
  }, [countdownStarted, eventName]);

  return (
    <div className="countdown-timer-container">
      <h2 className="countdown-name">
        {countdownStarted ? eventName : "Countdown Timer"}
      </h2>

      <p className="countdown-date">
        {countdownStarted && formatDate(eventDate)}
      </p>

      {!countdownStarted ? (
        <form className="countdown-form">
          <label htmlFor="title">Event Name</label>
          <input
            type="text"
            name="title"
            placeholder="Please Enter the event name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          <label htmlFor="date-picker">Event Date</label>
          <input
            type="date"
            name="date-picker"
            value={eventDate}
            onChange={(e) => {
              setEventDate(e.target.value);
            }}
            onClick={(e) => {
              e.target.type = "date";
            }}
          />
          <button onClick={handleSetCountdown}> Start Countdown</button>
        </form>
      ) : (
        <>
          {formatTime(timeRemaining)}
          <div className="control-buttons">
            <button onClick={handleStopCountdown}>Stop</button>
            <button onClick={handleResetCountdown}>Reset</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CountDownTimer;
