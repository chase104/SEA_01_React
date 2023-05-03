import React, { useState } from 'react';
import './index.css';

const Timer = () => {
    // have a time state (10),
    // count down to 0
    // can push button to restart
    const [time, setTime] = useState(10);

    setTimeout(() => {
        console.log("running function in timeout");
        if (time > 0) {
            setTime(time-1)
        }
    }, 1000);

    const handleClick = () => {
        setTime();
    }
  return (
    <div>
        <h3>Timer App</h3>
        <p>Message to user: Please don't reset until the count is done</p>
        <div>
            {time}
        </div>
        <button onClick={handleClick}>Reset</button>
    </div>
  )
}

export default Timer