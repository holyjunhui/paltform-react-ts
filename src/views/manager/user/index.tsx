import React, {Suspense, useState, useEffect } from "react";

const Demo2Page: React.FC = props => {
  const [result, setResult] = useState({ skill: "hook" });
  useEffect(() => {}, []);
  return (
		<Suspense fallback={<div>Loading...</div>}>
    <div className="demo-wrap">
      <div className="title">demo333333333333333333 {result.skill}</div>
      <div>{JSON.stringify(result)}</div>
    </div>
		</Suspense>

  );
};
export default Demo2Page;
