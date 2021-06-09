import React from 'react';

const PercentageBox = ({ number, className }) => {
  const bgColor =
    number.toString().charAt(0) == '-' ? 'bg-red-600' : 'bg-green-600';

  return (
    <span
      className={`${
        className ?? ''
      } ${bgColor} text-xs bg-gray-500 p-1 rounded text-white`}
    >
      {`${number.toFixed(2)} %`}
    </span>
  );
};

export default PercentageBox;
