import React from 'react';

export default function button({
  id = '',
  name = '',
  className = '',
  children = [],
}) {
  return(
    <button id name className
    >
      {children}
    </button>
  );
}