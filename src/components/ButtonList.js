import React from "react";
import Button from "./Button";

let dataList = [
  "All",
  "Music",
  "Live",
  "Cricket",
  "Socker",
  "News",
  "Cooking",
  "Valentines",
  "GuruJI",
  "Aws",
  "Ruby",
  "Rails",
  "RajanJi",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {dataList.map((data, index) => (
        <Button key={index} name={data} />
      ))}
    </div>
  );
};

export default ButtonList;

