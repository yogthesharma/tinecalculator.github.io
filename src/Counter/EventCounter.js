import React, { useState, useEffect } from "react";

function EventCounter() {
  const [date, setDate] = useState({ date: 0 });
  const [random, setUdate] = useState({ random: 0 });
  const [event, setEvent] = useState({ event: "" });
  const [press, setPress] = useState(false);

  // global declarations
  const tdate = new Date();
  const edate = new Date(date.date);
  const newDate = Math.abs(edate.getTime() - tdate.getTime());
  let dayLeft = Math.floor(newDate / 86400000);
  let hoursLeft = 24 - tdate.getHours();
  let minuteLeft = 60 - tdate.getMinutes();
  let secondsLeft = 60 - tdate.getSeconds();
  let events = event.event;

  // reset button coding
  const reset = () => {
    setDate({ date: "Not Specified" });
    setEvent({ event: "Not Specified" });
    document.querySelector("#op").innerHTML = `Event : ""`;

    document.querySelector(
      "#date"
    ).innerHTML = `Days: " " ||| Hrs: " " ||| Minutes: " " ||| Seconds; " " `;
  };

  // setting to the input
  const changingInput = (e) => {
    if (e.target.name === "date") {
      setDate({ date: e.target.value });
    } else setEvent({ event: e.target.value });
  };

  // timer starts here #########################
  const runningTimer = () => {
    setUdate({ random: Math.random() });
    setPress(true);
    if (press) {
      const updateDate = new Date();
      setDate({ date: edate });
      const newDate = Math.abs(edate.getTime() - updateDate.getTime());
      let dayLeft = Math.floor(newDate / 86400000);
      let hoursLeft = 24 - updateDate.getHours();
      let minuteLeft = 60 - updateDate.getMinutes();
      let secondsLeft = 60 - updateDate.getSeconds();
      document.querySelector("#op").innerHTML = `Event : ${events}`;
      document.querySelector(
        "#date"
      ).innerHTML = `Days: ${dayLeft} ||| Hrs: ${hoursLeft} ||| Minutes: ${minuteLeft} ||| Seconds; ${secondsLeft} `;
    }
  };

  useEffect(() => {
    setInterval(() => {
      runningTimer();
    }, 1000);
  }, []);

  // timer starts here ##########################

  return (
    <div>
      <input
        name="event"
        type="text"
        placeholder="Write Event Name"
        value={event.event}
        onChange={changingInput}
      />
      <br />
      <input
        name="date"
        type="date"
        placeholder="Evant Date"
        value={date.date}
        onChange={changingInput}
      />
      <br />
      <button id="btnId" onClick={reset}>
        Reset
      </button>
      <button onClick={runningTimer}>Start Timer</button>
      <div id="innerDiv"></div>
      <p id="op"></p>
      <p id="date"></p>
    </div>
  );
}

export default EventCounter;
