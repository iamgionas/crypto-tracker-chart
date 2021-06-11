import React from 'react';

const HeaderBox = ({ label, value }) => {
  return (
    <div className="border border-gray-100 rounded grid justify-items-center px-5">
      <span className="text-gray-300">{label}</span>{' '}
      <span className="font-bold text-xl">{value}</span>
    </div>
  );
};

export default HeaderBox;
