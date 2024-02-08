import React, { useEffect, useState } from "react";

export const Search = (props) => {
  const { add, sub } = props;

  const [data, setData] = useState(0);

  const addHandler = () => {
    // setData(data+1)

    // setData(data+1)

    // setData(data+1)

    setData((prev) => {
      return prev + 1;
    }); // 0+1

    // setData((prev) => prev + 1); // 1+1
  };

  const subHandler = () => {
    setData((prev) => prev - 1);
  };

  const add1 = () => {
    data + 5;
  };

  useEffect(add1, [data]);

  return (
    <div className="search-container">
      {/* <div>DEFAULT WITH ADD 5: {} */}

      <button className="common-button" onClick={subHandler}>
        {sub}
      </button>

      <input value={data} type="text" />

      <button className="common-button" onClick={addHandler}>
        {add}
      </button>
    </div>
  );
};
