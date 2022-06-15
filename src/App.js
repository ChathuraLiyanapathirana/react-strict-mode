import React, { useState, useEffect } from 'react';
import './style.css';

const StopwatchOne = () => {
  const [timer, setTimer] = useState(0);

  // console.log('Watch one rendering!');

  useEffect(() => {
    setInterval(() => {
      setTimer((value) => value + 1);
    }, 1000);
  }, []);

  return <span>{timer}</span>;
};

const StopwatchTwo = () => {
  const [timer, setTimer] = useState(0);

  // console.log('Watch one rendering!');

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((value) => value + 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return <span>{timer}</span>;
};

export default function App() {
  return (
    <div>
      <h1>Strict Mode Example</h1>
      <div>
        Watch One : <StopwatchOne />
      </div>
      <div>
        Watch One : <StopwatchTwo />
      </div>
    </div>
  );
}
