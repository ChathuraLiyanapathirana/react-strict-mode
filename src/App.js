import React, { useState, useEffect } from 'react';
import './style.css';
import WatchExample from './WatchExample';

export default function App() {
  return (
    <div>
      {/* Can you to identify the memory leaks */}
      <WatchExample />
    </div>
  );
}
