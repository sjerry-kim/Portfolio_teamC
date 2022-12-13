import React, { useState, useMemo } from "react";
const ProductInsertAverage = () => {
  const getAverage = numbers => {
    console.log("평균값 계산중..");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");

    //Form.Group에 넣기
    const onChange = e => {
      setNumber(e.target.value);
    };

    //Button에 넣기
    const onInsert = e => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    };

    const avg = useMemo(() => getAverage(list), [list]);

    return (
      <div>
        <input value={number} onChange={onChange} name="Average" />

        <button onClick={onInsert}>등록</button>
        <ul>
          {list.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <div>
          <b>평균 값:</b> {avg}
        </div>
      </div>
    );
  };
};

export default ProductInsertAverage;
