import React from "react";
const Appq = () => {
  const [data, setData] = React.useState<number[]>([1, 2, 3]);
  const click = () => {
    setData((data) => {
      // return [...data, 4];
      return data.concat(4);
    });
  };
  return (
    <div className="App">
      <button onClick={click}>btn</button>
      {data.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};
export default Appq;
