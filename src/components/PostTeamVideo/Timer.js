import React, { useState, useEffect } from 'react';

const Timer = ({recording, paused}) => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);

  useEffect(() => {
    let interval = null;
    if (recording && !paused) {
      interval = setInterval(() => {
        if (seconds < 59) {
					setSeconds(seconds => seconds + 1);
				} else if (minutes < 59) {
					setSeconds(0)
					setMinutes(minutes => minutes + 1)
				} else {
					setSeconds(0)
					setMinutes(0)
					setHours(hours => hours + 1)
				}
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [recording, paused, seconds, minutes, hours]);

  return (
			<div className="timer">
				{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
  );
};

export default Timer;