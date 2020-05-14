import React, { useState, useMemo } from 'react';

export default function DemoUseMemo() {
  const [count, setCount] = useState(0);
  const [deps, changeDeps] = useState(0);

  const log = (() =>
    `Your dependencies changed ${deps} times and count changed ${count} times`)();

  const logWithMemo = useMemo(
    () =>
      `Your dependencies changed ${deps} times and count changed ${count} times`,
    [deps]
  );

  const onClick = () => setCount((preCount) => preCount + 1);
  const onTrigger = () => changeDeps((preDeps) => preDeps + 1);

  return (
    <div>
      <p>{log}</p>
      <button onClick={onClick}>Change count</button>
      <p>{logWithMemo}</p>
      <button onClick={onTrigger}>Change deps</button>
    </div>
  );
}
