import React from 'react';
import './App.css';

import DemoUseEffect from './DemoUseEffect';
import DemoUseMemo from './DemoUseMemo';
import DemoUseCallback from './DemoUseCallback';

export default function App() {
  return (
    <div className="App">
      {/* <DemoUseEffect /> */}
      {/* <DemoUseMemo /> */}
      <DemoUseCallback />
    </div>
  );
}
