import React, { useState, useEffect } from 'react';

export default function DemoUseEffect() {
  const [count, setCount] = useState(0);
  const [deps, changeDeps] = useState(0);

  // useEffect(() => {
  //   console.log('run effects');
  // });

  // useEffect(() => {
  //   console.log('run effects with clean up');
  //   return () => {
  //     console.log('run clean up');
  //   };
  // });

  useEffect(() => {
    console.log('run effects only deps changed');
    return () => {
      console.log('run clean up');
    };
  }, [deps]);

  const onClick = () => setCount((preCount) => preCount + 1);
  const onTrigger = () => changeDeps((preDeps) => preDeps + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onClick}>Click me</button>
      <p>Your dependencies changed {deps} times</p>
      <button onClick={onTrigger}>Trigger me</button>
    </div>
  );
}
