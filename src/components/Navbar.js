import React from 'react';

const Navbar = ({ className }) => {
  console.log(className);
  return <nav className={className}>Nav</nav>;
};

export default Navbar;
