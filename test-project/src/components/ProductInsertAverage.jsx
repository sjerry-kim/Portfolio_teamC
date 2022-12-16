import React, { useState, useMemo } from "react";
const ProductInsertAverage = ({ list }) => {
  const getAverage = numbers => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;

    console.log(sum);
};

  //Form.Group에 넣기
  //Button에 넣기

  const avg = getAverage(list);

  return (
    <div>
      <b>별점:</b> {avg.toFixed(1)}
    </div>
  );
};

export default ProductInsertAverage;
