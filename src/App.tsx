import React from "react";
import { produce } from "immer";
import { useImmer } from "use-immer";
// import "./font/iconfont.js";
import memberList from "./test.json";
import "@/icon.css";
import C from "./components/cssCom/C";
const App = () => {
  // const [data, setData] = React.useState([1, 2, 3]);
  // const click = () => {
  //   setData((arr) => {
  //     // return data.push(8); error
  //     return [...arr, 8];
  //   });
  // };

  // const [data, setData] = React.useState([1, 2, 3]);
  // const click = () => {
  //   setData(
  //     produce((data) => {
  //       data.push(8);
  //     })
  //   );
  // };

  // const [data, setData] = useImmer([1, 2, 3]);
  // const click = () => {
  //   setData((arr) => {
  //     arr.push(80);
  //   });
  // };
  console.log(memberList);

  return (
    <div className="App">
      12aaa
      <C />
      {/* <button onClick={click}>btn</button>
      {data.map((item, index) => {
        return <div key={index}>{item}</div>;
      })} */}
    </div>
  );
};
export default App;
