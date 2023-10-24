import React from "react";
import ReactDOM from "react-dom/client";
import { GenericList } from "./GenericList";
import "./index.css";

type Data = { id: string };
/**
 * Build the GenericList component which takes 2 props `data` and `renderItem` function. 
The component:
- render items in `data` collection using `renderItem` function 
- should be type safe
- should be extendable to accept other list items other than `name` and `lastName`
- should have unit tests to validate component logic
 */
const nameDataList: Array<Data & { name: string }> = [
  { id: "1", name: "ali" },
  { id: "2", name: "jeff" },
  { id: "3", name: "barry" },
];

// const lastNameDataList: Array<Data & { lastName: string }> = [
//   { id: "1", lastName: "ton" },
//   { id: "2", lastName: "jim" },
//   { id: "3", lastName: "larry" },
// ];

const Label = ({ label }: { label: string }) => <p>{label}</p>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main>
      <GenericList
        data={nameDataList}
        renderItem={(obj) => <Label label={obj.name} />}
      />
      <GenericList
        data={lastNameDataList}
        renderItem={(obj) => <Label label={obj.lastName} />}
      />
    </main>
  </React.StrictMode>
);
